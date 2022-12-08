import React from "react"
import Link from "next/link"

export async function getServerSideProps() {
 const res = await fetch("https://jsonplaceholder.typicode.com/posts")
 const data = await res.json()
 if (!data) {
  return {
   notFound: true,
  }
 }
 return {
  props: {
   todos: data,
  },
 }
}

function post({todos}) {
 return (
  <div>
   {todos?.length === 0 ? (
    <div>loading..</div>
   ) : (
    todos?.map((todo) => (
     <div key={todo.id}>
      <Link href={`/blog/${encodeURIComponent(todo.id)}`}>
       <h2>
        {todo.id}: {todo.title}
       </h2>
       <p>{todo.body}</p>
      </Link>
     </div>
    ))
   )}
  </div>
 )
}

export default post
