import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
const NavHeader = () => {
    return ( 
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="-- Select Model --" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Select Model">-- Select Model --</SelectItem>
                <SelectItem value="GPT-4o">GPT-4o</SelectItem>
                <SelectItem value="LLaMA 3 70b">LLaMA 3 70b</SelectItem>
                <SelectItem value="Claude 3 Haiku">Claude 3 Haiku</SelectItem>
            </SelectContent>
        </Select>
      
     );
}
 
export default NavHeader;

