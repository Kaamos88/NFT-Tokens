import Modal from "react-modal";
import { useState } from "react";
import Spinner from "./Spinner";

Modal.setAppElement("#__next");

const Item = ({ token }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col justify-between bg-black border-[5px] h-full border-gray-500 rounded-3xl p-2 text-white text-center">
      <h2>{token.name}</h2>
      <img
        onClick={openModal}
        onLoad={() => setShowSpinner(false)}
        className="mx-auto cursor-pointer"
        src={token.metadata.image}
        alt={token.name}
      />
      {showSpinner ? <Spinner /> : ""}
      <div>
        <span>User Address:</span>
        <br />
        <span className="text-xs break-all">{token.user}</span>
      </div>

      <Modal
        className="text-white m-auto"
        overlayClassName="fixed inset-0 flex bg-slate-200 bg-opacity-50"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={token.name}
      >
        <div className="bg-black border-4 xl:h-auto border-gray-500 rounded-3xl custom">
          <div className="flex flex-col h-full w-96 justify-center items-center">
            <div className="flex">
              <div className="w-1/2">
                <img src={token.metadata.image} alt={token.name} />
              </div>
              <div className="self-center text-center w-1/2">
                <p>{token.metadata.name}</p>
                <br />
                <p>Rarity: {token.metadata.rarity}</p>
                <p>God: {token.metadata.god}</p>
                <p>Set: {token.metadata.set}</p>
                <p>Quality: {token.metadata.quality}</p>
                <p>Proto: {token.metadata.proto}</p>
                <p>Mana: {token.metadata.mana}</p>
                <p>Type: {token.metadata.type}</p>
              </div>
            </div>
            <div className="my-2 text-center">
              <p>Effect:</p>
              <p>{token.metadata.effect}</p>
            </div>
            <button
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-1 px-3 mb-2 rounded-full"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Item;
