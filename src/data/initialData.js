const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Create documentation" },
    "task-2": { id: "task-2", content: "Migration to TypeScript" },
    "task-3": { id: "task-3", content: "Expo App" },
    "task-4": { id: "task-4", content: "New Layout" },
    "task-5": { id: "task-5", content: "IOS App" },
    "task-6": { id: "task-6", content: "Clear backlog" },
    "task-7": { id: "task-7", content: "Induction" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: " 📝 To Do",
      tasksOrder: ["task-1", "task-2", "task-3"],
      isEditing: false,
    },
    "column-2": {
      id: "column-2",
      title: " ✏️ Doing",
      tasksOrder: ["task-4"],
      isEditing: false,
    },
    "column-3": {
      id: "column-3",
      title: " ✅ Done",
      tasksOrder: ["task-5", "task-6", "task-7"],
      isEditing: false,
    },
  },
  columnsOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
