import { FormEvent, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import "../styles/auth.scss";
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import { Button } from "../components/Button";

import { useHistory } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";
export function Home() {
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState("");

  const history = useHistory();
  const handleCreateRoom = async () => {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new");
  };

  const handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault();

    if(roomCode.trim() === "")
    {
      toast.error('Você deve informar o código de uma para poder entrar.')
      return;
    }
    //search for the roomCode in the database
    const roomRef = await database.ref(`rooms/${roomCode}`).get(); 
    
    if(!roomRef.exists())
    {
      toast.error('A sala informada não existe.');
      return;
    }

    if(roomRef.val().endedAt)
    {
      toast.error('A sala informada já está fechada.');
      return;
    }
    history.push(`/rooms/${roomCode}`);
  };
  return (
    <div id="page-auth">
      <Toaster />
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main className="main-auth">
        <div className="main-content">
          <img src={logoImg} alt="LetMeAsk" />
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Cria sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
