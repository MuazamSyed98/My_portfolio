import React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

function Projects() {
  // Item component definition
  const Item = ({ children, href }) => (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        textAlign: "center",
        cursor: "pointer",
        '&:hover': {
          backgroundColor: '#9A9498',
        },
      }}
    >
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        {children}
      </a>
    </Paper>
  );

  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <p>COMING SOON. . . . . . . </p>
      <Stack spacing={2}>
        <Item href="https://github.com/your-repo/project1">Project 1</Item>
        <Item href="https://github.com/your-repo/project2">Project 2</Item>
        <Item href="https://github.com/your-repo/project3">Project 3</Item>
      </Stack>
    </div>
  );
}

export default Projects;
