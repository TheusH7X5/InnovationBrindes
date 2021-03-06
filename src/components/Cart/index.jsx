import {
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Text,
  Stack,
  Badge,
  Spinner,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "../../services/hooks/contexts/CartContext";
import UiNumber from "../UiNumber";

const Cart = () => {
  const { products, nameFilter } = useContext(CartContext);

  function getProductForName() {
    return products.filter((product) =>
      nameFilter ? product.nome.toLowerCase().includes(nameFilter) : true
    );
  }

  const productForName = getProductForName();

  return (
    <Box w="100%" minH='100vh' align="center" mt="2em">
      <SimpleGrid h={["50%"]} w={["68%"]} columns={[2, 4]} spacing={[20, 2]}>
        {productForName.map((product) => (
          <Flex ml={["-6", "0"]} flexDir={["column"]}>
            <Text
              align={["left", "center"]}
              fontSize="sm"
              mb={["2", "0"]}
              h={["35px", "20px"]}
            >
              <b>{product.nome}</b>
            </Text>
            <br />
            <Text>- {product.codigo} -</Text>
            <Box
              w={["150px", "200px"]}
              transform="scale(0.97)"
              transition="all ease 0.5s"
              cursor="pointer"
              key={product.codigo}
              border="1px solid #EEEEEE"
              height="auto"
              _hover={{ transform: "scale(1)" }}
            >
              <Text p={1} fontSize="xs" color="#19B3CB" textAlign="right">
                <strong>EXCLUSIVO!</strong>
              </Text>
              <Image src={product.imagem} alt="product" h="auto" w="100%" />
              <Flex mt="2" border="1px solid #EEEEEE" h="50px">
                <Image
                  ml="2"
                  align="left"
                  src={"/box.png"}
                  alt="box"
                  h={["30px","50px"]}
                  w="auto"
                />
                <Flex mt="1" flexDir="column">
                  <Text
                    color="gray"
                    fontSize="xs"
                    align={["left", "center"]}
                    justify="center"
                  >
                    <strong>Com embalagem</strong>
                  </Text>
                  <Text
                    color="gray"
                    fontSize="xs"
                    align="left"
                    justify="center"
                  >
                    <strong>especial</strong>
                  </Text>
                </Flex>
              </Flex>
              <Text mt="2" ml="2" textAlign="left">
                <strong>Cores:</strong>
              </Text>
              <Stack mb="2" ml="2" direction="row">
                <Badge
                  boxSize={["0.8em", "1em"]}
                  borderRadius="full"
                  bgColor="brown"
                ></Badge>
                <Badge
                  boxSize={["0.8em", "1em"]}
                  borderRadius="full"
                  bgColor="blue"
                ></Badge>
                <Badge
                  boxSize={["0.8em", "1em"]}
                  borderRadius="full"
                  bgColor="gray"
                ></Badge>
                <Badge
                  boxSize={["0.8em", "1em"]}
                  borderRadius="full"
                  bgColor="blue.500"
                ></Badge>
                <Badge
                  boxSize={["0.8em", "1em"]}
                  borderRadius="full"
                  bgColor="green"
                ></Badge>
                <Badge
                  boxSize={["0.8em", "1em"]}
                  borderRadius="full"
                  bgColor="gray.800"
                ></Badge>
              </Stack>

              <Stack mt="-1" mb="2" ml="2" direction="row">
                <Badge
                  boxSize={["0.8em", "1em"]}
                  borderRadius="full"
                  bgColor="gray.300"
                ></Badge>
                <Badge
                  boxSize={["0.8em", "1em"]}
                  borderRadius="full"
                  bgColor="red"
                ></Badge>
                <Badge
                  boxSize={["0.8em", "1em"]}
                  borderRadius="full"
                  bgColor="green.500"
                ></Badge>
                <Badge
                  boxSize={["0.8em", "1em"]}
                  borderRadius="full"
                  bgColor="blue.200"
                ></Badge>
              </Stack>

              <Stack mt="-1" mb="2" ml="2" direction="row">
                <Badge
                  boxSize={["0.8em", "1em"]}
                  borderRadius="full"
                  bgColor="blue.700"
                ></Badge>
                <Badge
                  boxSize={["0.8em", "1em"]}
                  borderRadius="full"
                  bgColor="orange"
                ></Badge>
                <Badge
                  boxSize={["0.8em", "1em"]}
                  borderRadius="full"
                  bgColor="yellow"
                ></Badge>
                <Badge
                  boxSize={["0.8em", "1em"]}
                  borderRadius="full"
                  bgColor="purple"
                ></Badge>
              </Stack>
              <Text
                ml="2"
                h="2.5rem"
                fontSize="xs"
                textAlign="left"
                noOfLines={2}
              >
                {product.descricao}
              </Text>
              <Text mt="1" mr="1" mb="-5" fontSize="xs" textAlign="right">
                A partir de
              </Text>
              <Text mr="1" textAlign="right" mt="1rem">
                <strong>
                  {product.preco === "0.0" ? (
                    "Gr??tis"
                  ) : (
                    <UiNumber format="0,0.00">{Number(product.preco)}</UiNumber>
                  )}
                </strong>
              </Text>
              <Text mr="1" mt="-1" fontSize="xs" textAlign="right">
                Gerado pela melhor oferta
              </Text>
            </Box>
            <Button
              mb={["0", "4"]}
              h="6"
              w={["120%", "90%"]}
              color="white"
              bgColor="#7fbc03"
              mt="5px"
              borderRadius='0'
              _hover={{
                backgroundColor: "white",
                color: "#7fbc03",
                border: "1px solid #7fbc03",
              }}
            >
              CONFIRA
            </Button>
          </Flex>
        ))}
      </SimpleGrid>
      {products.length <= 0 && (
        <Spinner
          mt="50px"
          thickness="6px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#7fbc03"
          size="xl"
        />
      )}
    </Box>
  );
};

export default Cart;
