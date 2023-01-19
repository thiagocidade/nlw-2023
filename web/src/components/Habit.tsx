interface HabitProps {
  completed: number,
}

export function Habit(props: HabitProps) {
  return (
    <p className="bg-gray-500 w-10 h-10 flex justify-center items-center m-4 rounded">
      {props.completed}
    </p>
  )
}