import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCard from "../component/card";

export const Home = () => {
  const [contactos, setContactos] = useState([]); // Estado para almacenar los contactos

  // Esta función obtiene la lista de contactos de la agenda
  async function listaContactos() {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    try {
      let response = await fetch("https://playground.4geeks.com/contact/agendas/jfplaz", requestOptions);
      if (response.status === 404) {
        CrearAgenda();
      } else {
        let result = await response.json();
        setContactos(result.contacts); // Actualiza el estado con los contactos obtenidos
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function CrearAgenda() {
    const requestOptions = {
      method: "POST",
      redirect: "follow"
    };

    try {
      let response = await fetch("https://playground.4geeks.com/contact/agendas/jfplaz", requestOptions);
      if (response.status === 201) {
        listaContactos(); // Vuelve a llamar a listaContactos si se crea la agenda
      }
      let result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    listaContactos(); // Llama a la función cuando el componente se monta
  }, []); // Solo se ejecuta una vez al cargar el componente

  // Función de eliminar contacto
  const handleDelete = (id) => {
    // Lógica para eliminar el contacto (por ejemplo, llamar a una API para borrar el contacto)
    console.log(`Eliminar contacto con ID: ${id}`);
  };

  return (
    <div className="text-center mt-5 alaing-content-center">
      <h1>Lista de contactos</h1>
      <Link to="/addContacts">
        <button type="button" className="btn btn-primary justify-content-end">
          Add New Contact
        </button>
      </Link>
      
      {/* Renderiza los contactos */}
      {contactos.length > 0 ? (
        contactos.map((contact) => (
          <ContactCard key={contact.id} contact={contact} onDelete={handleDelete} />
        ))
      ) : (
        <p>No hay contactos disponibles.</p>
      )}
    </div>
  );
};
