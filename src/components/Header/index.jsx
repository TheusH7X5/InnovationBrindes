import {
  Avatar,
  AvatarBadge,
  Badge,
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  Text,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../services/hooks/contexts/CartContext";
import { FaMoon, FaSun } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const { onChangeNameFilter, nameFilter } = useContext(CartContext);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      as="header"
      w="100%"
      maxWidth={1480}
      h={["55px", "20"]}
      mx="auto"
      bgColor="#7fbc03"
      justifyContent={["start", "center"]}
      display="flex"
    >
      <Flex
        px={["6", "6"]}
        align={["center"]}
        w={["100%"]}
        maxWidth={["50%", "70%"]}
      >
        <Image
          onClick={() => navigate("/")}
          src="/logo.png"
          h={[9, 12]}
          alt="Innovation Brindes"
          cursor="pointer"
        />
        {isWideVersion && (
          <Flex
            as="label"
            flex="1"
            py="3"
            px="8"
            ml="10"
            maxWidth="330"
            alignSelf="center"
            position="relative"
            bg="white"
            borderRadius="full"
          >
            <Input
              color="gray.800"
              variant="unstyled"
              px="4"
              mr="4"
              placeholder="Pesquisar"
              _placeholder={{ color: "gray" }}
              value={nameFilter}
              onChange={onChangeNameFilter}
            />

            <Icon
              cursor="pointer"
              as={RiSearchLine}
              fontSize="20"
              color="gray"
            />
          </Flex>
        )}

        <Flex align="center" ml={["12", "auto"]}>
          <HStack
            spacing={["2", "2.5"]}
            mx={["5", "4"]}
            pr={["5", "4"]}
            py={["1", "1.5"]}
            color="white"
            borderRightWidth={1}
            borderColor="white"
          >
            <IconButton
            ml={['-10','0']}
              _active={{ bg: "#7fbc03" }}
              bg="#7fbc03"
              _hover={{ bg: "#7fbc03" }}
              icon={
                colorMode === "light" ? (
                  <FaSun fontSize={["15", "20"]} color="white" />
                ) : (
                  <FaMoon fontSize={["15", "20"]} color="white" />
                )
              }
              onClick={toggleColorMode}
              command="⌘"
            ></IconButton>
            <Flex>
              <Icon as={MdEmail} fontSize={["25", "30"]} />
              <Badge
                borderRadius="10px"
                variant="solid"
                bgColor="white"
                color="#7fbc03"
                maxH={[4, 5]}
              >
                11
              </Badge>
            </Flex>
            <Flex>
              <Icon as={BsFillTelephoneFill} fontSize={["20", "25"]} />
              <Badge
                borderRadius="10px"
                variant="solid"
                bgColor="white"
                color="#7fbc03"
                maxH={[4, 5]}
              >
                11
              </Badge>
            </Flex>
          </HStack>

          <Flex align="center">
            <Avatar
              border={["2px solid white", "3px solid white"]}
              size={["md"]}
              name="Matheus Borges"
              src="https://github.com/theush7x5.png"
            >
              <AvatarBadge
                borderColor="white"
                bg="green"
                boxSize={["0.8em", "1em"]}
              />
            </Avatar>

            <Box ml={["1", "4"]} textAlign="left">
              {isWideVersion && (
                <>
                  <Text color="white">Matheus Borges</Text>
                  <Text color="white" fontSize="small">
                    matheush7x5@gmail.com
                  </Text>
                </>
              )}
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
