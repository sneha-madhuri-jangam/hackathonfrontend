import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
// import {Input} from "@nextui-org/input";

function View()
{
    return(
       <>
 <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
  <div className="w- h-1/4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-8">
    <Input
      isClearable
      type="text"
      label="enter your url"
      variant="bordered"
      placeholder="Paste link here"
      defaultValue=""
      onClear={() => console.log("input cleared")}
      className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
    <Button className="decoration-gray-700 items-center">
      Button
    </Button>

    <Input
      isClearable
      type="text"
      label="the prompt generated"
    //   variant="bordered"
    //   placeholder=""
    //   defaultValue=""
      onClear={() => console.log("input cleared")}
      className="w-full p-4 text-lg  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
    />









  </div>

  
</div>




       </>







    )
}
export default View;