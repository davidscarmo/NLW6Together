import { useHistory, useParams } from "react-router-dom";
import logoImg from "../assets/images/logo.svg";
import deleteImage from "../assets/images/delete.svg";
import checkImg from "../assets/images/check.svg";
import answerImg from "../assets/images/answer.svg";

import Modal from "react-modal";
import { Button } from "../components/Button";
import { Question } from "../components/Question";
import { RoomCode } from "../components/RoomCode";
// import { useAuth } from "../hooks/useAuth";
import { useRoom } from "../hooks/useRoom";

import "../styles/room.scss";
import { database } from "../services/firebase";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

type RoomParams = {
  id: string;
};
export const AdminRoom = () => {
  // const { user } = useAuth();
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { questions, title } = useRoom(roomId);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [questionIdToDelete, setQuestionIdToDelete] = useState("");
  
  const handleOpenConfirmationModal = (questionId: string) => {
    setConfirmationModal(true);
    setQuestionIdToDelete(questionId);
  };
  const handleCloseConfirmationModal = () => {
    setConfirmationModal(false);
  };
  
  const handleEndRoom = async () => {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });
    toast.success('Sala encerrada!');
    history.push("/");
  };
  const handleDeleteQuestion = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    setConfirmationModal(false);
    toast.success('Pergunta excluída!'); 
  };

  const handleCheckQuestionAsAnswered = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  };

  const handleHighLightQuestion = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  };

  return (
    <div id="page-room">
      <Toaster />
      <header>
        <div className="content">
          <img src={logoImg} alt="LetMeAsk" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              {" "}
              Encerrar
            </Button>
          </div>
        </div>
      </header>
      <main className="main-room">
        <div className="room-title">
          <h1>Room: {title}</h1>
          {questions.length > 0 && (
            <span> {questions.length} pergunta(s) </span>
          )}
        </div>
        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                      <img
                        src={checkImg}
                        alt="Marcar pergunta como respondida"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleHighLightQuestion(question.id)}
                    >
                      <img src={answerImg} alt="Dar destaque para a pergunta" />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => handleOpenConfirmationModal(question.id)}
                >
                  <img src={deleteImage} alt="Remover pergunta" />
                </button>
              </Question>
            );
          })}
        </div>
      </main>

      <Modal
        isOpen={confirmationModal}
        onRequestClose={handleCloseConfirmationModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 5.99988H5H21"
            stroke="#737380"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z"
            stroke="#737380"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <h2>Excluir Pergunta</h2>
        <p>Tem certeza que você deseja excluir esta pergunta?</p>

        <div className="confirmArea">
          <button type="button" onClick={handleCloseConfirmationModal}>
            Cancelar
          </button>
          <button type="button" onClick={() => handleDeleteQuestion(questionIdToDelete)}>Sim, Excluir</button>
        </div>
      </Modal>
    </div>
  );
};
