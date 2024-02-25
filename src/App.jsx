import Modal from "./components/modal/Modal";

function App() {
  return (
    <div className="app">
      <Modal id="contact-modal">
        <Modal.Trigger>
          <button>Open</button>
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Header>Contact form</Modal.Header>
          <Modal.Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            laudantium ipsa ratione deleniti accusantium ea ipsum placeat
            provident, perferendis, tempora minus animi saepe vero aliquam quia
            quidem praesentium deserunt molestias
          </Modal.Description>

          <Modal.Footer>
            <button>Close</button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </div>
  );
}

export default App;
