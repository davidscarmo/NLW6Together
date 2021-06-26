import copyImg from "../assets/images/copy.svg";

import "../styles/room-code.scss";
import toast, { Toaster} from "react-hot-toast";
type RoomCodeProps = {
  code: string;
};
export const RoomCode = (props: RoomCodeProps) => {
  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(props.code);
    toast.success('Código copiado com sucesso!');
  };
  return (
    <>
    <Toaster />
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span> Sala {props.code}</span>
    </button>
    </>
  );
};
