import {
  Field,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import CustomButton from "./CustomButton"

const Form = () => {
  return (
    <form className="flex flex-col gap-4 bg-white/15 border border-white/20 backdrop-blur p-4 rounded-xl">
        <h2 className="text-lg font-semibold mb-2">Rezervace termínu</h2>
        <Field >
      <FieldLabel className="text-base" htmlFor="name">Vaše jméno</FieldLabel>
      <Input className="hover:bg-white/10 focus:bg-white/10" id="name" type="text" placeholder="Jan Novák" />
    </Field>
        <Field>
      <FieldLabel className="text-base" htmlFor="phone">Telefon</FieldLabel>
      <Input className="hover:bg-white/10 focus:bg-white/10" id="phone" type="text" placeholder="+420 123 456 789" />
    </Field>
    <div className="flex flex-col gap-2 "> 
        <label htmlFor="sluzby" className="text-base">Služba</label>
    <Select defaultValue="strihani" >
              <SelectTrigger className="cursor-pointer hover:bg-white/10" id="sluzba">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="text-white backdrop-blur-lg p-1">
                <SelectItem className="cursor-pointer hover:underline" value="strihani">Strihání</SelectItem>
                <SelectItem className="cursor-pointer hover:underline" value="barveni">Barvení</SelectItem>
                <SelectItem className="cursor-pointer hover:underline" value="pece">Peče o vlasy</SelectItem>
                <SelectItem className="cursor-pointer hover:underline" value="styling">Styling</SelectItem>
                <SelectItem className="cursor-pointer hover:underline" value="panske-sluzby">Pánské služby</SelectItem>
                <SelectItem className="cursor-pointer hover:underline" value="detske-strihy">Dětské střihy</SelectItem>
              </SelectContent>
            </Select>
            </div>
<CustomButton theme="secondary" className=" mt-4 "/>
    </form>
  )
}

export default Form