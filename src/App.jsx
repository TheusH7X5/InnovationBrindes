import { ChakraProvider } from "@chakra-ui/react";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./services/hooks/contexts/CartContext";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <CartContextProvider>
          <AppRoutes />
        </CartContextProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
