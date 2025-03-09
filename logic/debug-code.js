app.get("/tasks/:id", (req, res) => {
  const { id } = req.body; // ! No deberia de ir body, sino req.params
  const task = tasks.find((t) => t.id == id); //! Deberia de ser mas especifico con argumentos (t) => no tiene sentido
  // ! Debería ser === (triple igual) para ser mas estrictos con la comparación de tipos

  if (!task) {
    res.status(200).json({ error: "Task not found" }); // ! Debería devolver un status 404
    //! Hace falta el return para que no siga ejecutando el código
  } else {
    res.send(task); // ! Deberia de devolver un status 200
    //! Si la persona hubiera querido devolver la task, lo ideal seria devolverla en json, si desea usar send, solamente deberia de devolver un mensaje de que se ha encontrado la tarea
  }
  //! Hace falta un manejador de errores como un try catch
});

// Corrección del codigo anterior
app.get("/tasks/:id", (req, res) => {
  const { id } = req.params;
  try {
    const task = tasks.find((task) => task.id === id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
