
interface APIResponse {
  data: any[]
  status: number | null
}

const greeter = (name: string, greet = "hi") => {
  console.log(`${greet} ${name}!`);
}


greeter("Mark")

