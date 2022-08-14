import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement('#__next');

const ListElement = ({ token }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  return (
    <div className="bg-black text-white text-center">
      <h2>{token.name}</h2>
      <img
        onClick={openModal}
        className="mx-auto cursor-pointer"
        src={token.metadata.image}
        alt={token.name}
      />
      <span>user address</span>
      <br />
      <span>{token.user}</span>

      <Modal
        className="text-white m-auto"
        overlayClassName="fixed inset-0 flex"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={token.name}
      >
        <div className="bg-black">
          <button className="text-white float-right" onClick={closeModal}>
            X
          </button>
          <div className="flex justify-center items-center">
              <div className="basis-1/4">
                <img src={token.metadata.image} alt={token.name} />
              </div>
              <div className="basis-1/2 text-center">
                <p>{token.metadata.name}</p>
                <p>Rarity: {token.metadata.rarity}</p>
                <p>God: {token.metadata.god}</p>
                <p>Set: {token.metadata.set}</p>
                <p>Quality: {token.metadata.quality}</p>
                <p>Proto: {token.metadata.proto}</p>
                <p>Mana: {token.metadata.mana}</p>
                <p>Type: {token.metadata.type}</p>
                <p>Effect: {token.metadata.effect}</p>
              </div>
            </div>
        </div>
      </Modal>
    </div>
  );
};

export default ListElement;

