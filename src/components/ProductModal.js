import { Image, Modal, Button, Text } from "@nextui-org/react";

export default function ProductModal({ product, onClose }) {
  return (
    <Modal
      closeButton
      blur
      preventClose
      width="600px"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      open
      onClose={onClose}
    >
      <Modal.Header>
        <Text id="modal-title" weight={"medium"} size={40}>
          {product.title}
        </Text>
      </Modal.Header>
      <Image
        width={640}
        height={360}
        src={"https://nextui.org" + product.img}
        alt="Default Image"
        objectFit="cover"
      />
      <Modal.Body>
        <Text id="modal-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque animi
          amet asperiores fugit laudantium atque perspiciatis cupiditate
          architecto aut doloremque.Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Cumque animi amet asperiores fugit laudantium atque
          perspiciatis cupiditate architecto aut doloremque.Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Cumque animi amet asperiores
          fugit laudantium atque perspiciatis cupiditate architecto aut
          doloremque.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Cumque animi amet asperiores fugit laudantium atque perspiciatis
          cupiditate architecto aut doloremque.
        </Text>
        <Text weight={"bold"}>
          <p>{product.price}</p>
          <p>
            {product.stock > 0
              ? `Only ${product.stock} left in stock (more on the way) 😃`
              : "Sold out 😭"}
          </p>
        </Text>
      </Modal.Body>

      <Modal.Footer justify="center">
        <button
          className="flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-4 py-3 text-base font-medium text-gray-800 shadow-sm hover:bg-gray-300 sm:px-8"
          onClick={onClose}
        >
          Buy Now
        </button>
        <button
          className="flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-4 py-3 text-base font-medium text-gray-800 shadow-sm hover:bg-gray-300 sm:px-8"
          onClick={onClose}
        >
          Add To Cart
        </button>
      </Modal.Footer>
    </Modal>
  );
}
