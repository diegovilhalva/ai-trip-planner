"use client"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import axios from "axios"
import { useState, useRef, useEffect } from "react"

type Message = {
  role: string
  content: string
}

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [userInput, setUserInput] = useState<string>("")
  const bottomRef = useRef<HTMLDivElement>(null)

  const onSend = async () => {
    if (!userInput.trim()) return

    const newMsg: Message = {
      role: "user",
      content: userInput,
    }

    // adiciona mensagem do usuário localmente
    setMessages((prev: Message[]) => [...prev, newMsg])
    setUserInput("")

    try {
      const res = await axios.post("/api/aimodel", {
        messages: [...messages, newMsg],
      })

      // garante que temos um objeto JSON
      const data = res.data
      console.log("Resposta do backend:", data)

      setMessages((prev: Message[]) => [
        ...prev,
        { role: "assistant", content: data?.resp ?? "Erro: resposta inválida" },
      ])

      // 👉 Se quiser usar o `ui` pra renderizar componentes específicos no futuro:
      // if (data?.ui === "budget") { ... }

    } catch (err) {
      console.error("Erro na requisição:", err)
      setMessages((prev: Message[]) => [
        ...prev,
        { role: "assistant", content: "⚠️ Ocorreu um erro, tente novamente." },
      ])
    }
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="h-[85vh] flex flex-col">
      {/* Área das mensagens */}
      <section className="flex-1 overflow-y-auto px-2 sm:px-4">
        {messages.map((msg: Message, idx) =>
          msg.role === "user" ? (
            <div className="flex justify-end mt-2" key={idx}>
              <div className="max-w-xs sm:max-w-md md:max-w-lg bg-primary text-white px-4 py-2 rounded-2xl whitespace-pre-wrap">
                {msg.content}
              </div>
            </div>
          ) : (
            <div className="flex justify-start mt-2" key={idx}>
              <div className="max-w-xs sm:max-w-md md:max-w-lg bg-gray-100 text-black px-4 py-2 rounded-2xl whitespace-pre-wrap">
                {msg.content}
              </div>
            </div>
          )
        )}
        <div ref={bottomRef} />
      </section>

      {/* Área de input */}
      <section className="p-2 sm:p-4">
        <div className="border rounded-2xl p-4 relative shadow-sm bg-white/80 backdrop-blur-sm">
          <Textarea
            placeholder="Create a trip for Paris from New York"
            className="w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none"
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                onSend()
              }
            }}
          />

          <Button
            size="icon"
            disabled={!userInput.trim()}
            className="absolute bottom-4 right-4 hover:scale-110 transition-transform"
            onClick={onSend}
          >
            <Send className="h-4 w-4 rotate-45" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default ChatBox
