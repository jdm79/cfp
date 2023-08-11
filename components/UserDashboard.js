import { useAuth } from "@/context/AuthContext";
import React, { useState, useEffect } from "react";
import TodoCard from "./TodoCard";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

export default function UserDashboard() {
  const { userInfo, currentUser } = useAuth();
  const [addTodo, setAddTodo] = useState(false);
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState({});
  console.log(todoList);

  // useEffect(() => {
  //   if (!userInfo || Object.keys(userInfo).length === 0) {
  //     setAddTodo(true);
  //   }
  // }, [userInfo]);

  async function handleAddTodo() {
    if (!todo) {
      return;
    }
    const newKey =
      Object.keys(todoList).length === 0
        ? 1
        : Math.max(...Object.keys(todoList)) + 1;
    setTodoList({
      ...todoList,
      [newKey]: todo,
    });
    setTodo("");
    const userRef = doc(db, "users", currentUser.uid);
    await setDoc(
      userRef,
      {
        todos: {
          [newKey]: todo,
        },
      },
      { merge: true }
    );
  }

  return (
    <div className='w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col gap-3 sm:gap-5'>
      <div className='flex items-stretch'>
        <input
          type='text'
          placeholder='Enter todo'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className='flex-1 outline-none p-3 text-base sm:text-lg text-slate-900'
        />
        <button
          onClick={handleAddTodo}
          className='w-fit px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 text-white uppercase font-medium text-base duration-300 hover:opacity-40'
        >
          Add
        </button>
      </div>
      {userInfo && (
        <>
          {Object.keys(todoList).map((todo, i) => {
            return <TodoCard key={i}>{todoList[todo]}</TodoCard>;
          })}
        </>
      )}
      {/* {!addTodo && (
        <button
          onClick={() => setAddTodo(true)}
          className='text-cyan-300 border border-solid border-cyan-300 py-2 text-center uppercase text-lg duration-300 hover:opacity-30 select-none'
        >
          ADD TODO
        </button>
      )} */}
    </div>
  );
}
