import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaEdit, FaTrash } from 'react-icons/fa'; // Asegúrate de importar los íconos

const ContactCard = ({ contact, onDelete }) => {
  const navigate = useNavigate();

  return (
    <Card className="mb-3 shadow-sm card w-50 mx-auto mt-2">
      <Card.Body className="d-flex align-items-center justify-content-between">
        {/* Imagen del contacto */}
        <img
          src={contact.image || "https://media.istockphoto.com/id/1091291084/es/vector/foto-de-perfil-neutro.jpg?s=2048x2048&w=is&k=20&c=lcWclUlTspS_0-6SWxujxRNXc69nEwABzvAJAFiYfJU="}
          alt="Profile"
          className="rounded-circle"
          width="200"
          height="200"
        />
        {/* Información del contacto */}
        <div className="">
          <Card.Title>
            <Link to={`/contact/${contact.id}`} className="text-decoration-none text-dark">
              {contact.name}
            </Link>
          </Card.Title>
          <Card.Text>
            <FaMapMarkerAlt className="me-2" />
            {contact.address} <br />
            <FaPhone className="me-2" />
            {contact.phone} <br />
            <FaEnvelope className="me-2" />
            {contact.email}
          </Card.Text>
        </div>
        {/* Botones de acciones */}
        <div>
          <Button variant="outline-primary" size="sm" className="me-2" onClick={() => navigate(`/edit-contact/${contact.id}`)}>
            <FaEdit />
          </Button>
          <Button variant="outline-danger" size="sm" onClick={() => onDelete(contact.id)}>
            <FaTrash />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ContactCard;
