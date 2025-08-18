"use client"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"


const ChatBox = () => {
    const onSend =async () => {

    }
    return (
        <div className="h-[85vh] flex flex-col" >
            <section className="flex-1 overflow-y-auto">
                <div className="flex justify-end mt-2">
                    <div className="max-w-lg bg-primary text-white px-4 py-2 rounded-lg">
                        User Msg
                    </div>
                </div>
                <div className="flex justify-start mt-2">
                    <div className="max-w-lg bg-gray-100 text-black px-4 py-2 rounded-lg">
                        Agent Msg
                    </div>
                </div>
            </section>
            <section>
                 <div className="border rounded-2xl p-4 relative shadow-sm bg-white/80 backdrop-blur-sm">
                          <Textarea
                            placeholder="Create a trip for Paris from New York"
                            className="w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none"
                          />
                
                          <Button
                            size="icon"
                            className="absolute bottom-4 right-4 hover:scale-110 transition-transform"
                            onClick={() => onSend()}
                          >
                            <Send className="h-4 w-4 rotate-45" />
                          </Button>
                        </div>
            </section>
        </div>
    )
}

export default ChatBox