import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ITodo } from "@/interfaces";
import { Badge } from "./ui/badge";
import TodosTableActions from "./TodosTableActions";

export default function TodosTable({ todos }: { todos: ITodo[] }) {
  return (
    <Table>
      <TableCaption>A list of your recent todos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Count</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo, idx) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{idx + 1}</TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell>
              {todo.completed ? (
                <Badge>Completed</Badge>
              ) : (
                <Badge variant="secondary">Uncompleted</Badge>
              )}
            </TableCell>
            <TableCell className="flex items-center justify-end gap-2">
              <TodosTableActions todo={todo} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">
            {todos.length ? todos.length : "YOU DON'T HAVE ANY TODOS YET!"}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
