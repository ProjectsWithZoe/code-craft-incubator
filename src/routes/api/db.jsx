import { sql } from '../../lib/db';

export async function getProjects() {
  try {
    const result = await sql`SELECT * FROM projects`;
    return result;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}

export async function getProjectById(id) {
  try {
    const result = await sql`SELECT * FROM projects WHERE id = ${id}`;
    return result[0];
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
}

export async function createProject(project) {
  try {
    const { name, description, category, difficulty, tech_stack } = project;
    const result = await sql`
      INSERT INTO projects (name, description, category, difficulty, tech_stack)
      VALUES (${name}, ${description}, ${category}, ${difficulty}, ${tech_stack})
      RETURNING *
    `;
    return result[0];
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
}

export async function updateProject(id, project) {
  try {
    const { name, description, category, difficulty, tech_stack } = project;
    const result = await sql`
      UPDATE projects
      SET name = ${name},
          description = ${description},
          category = ${category},
          difficulty = ${difficulty},
          tech_stack = ${tech_stack}
      WHERE id = ${id}
      RETURNING *
    `;
    return result[0];
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
}

export async function deleteProject(id) {
  try {
    const result = await sql`
      DELETE FROM projects
      WHERE id = ${id}
      RETURNING *
    `;
    return result[0];
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
} 