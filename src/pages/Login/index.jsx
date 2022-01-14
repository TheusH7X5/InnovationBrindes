import {
  Flex,
  Button,
  Stack,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  Checkbox,
  InputLeftElement,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { IoIosUnlock } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const schema = yup.object().shape({
  email: yup.string().required("Nome do usuário obrigatório"),
  senha: yup.string().required("Senha obrigatória"),
});

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const toast = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const reqBody = {
      email: data?.email,
      senha: data?.senha,
    };

    axios
      .post(
        "https://innovationbrindes-dev.com.br/api/innova-dinamica/login/acessar",
        reqBody
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token_de_acesso);
        if (response.data.status === 1) {
          toast({
            title: `Login feito com sucesso!`,
            variant: "left-accent",
            status: "success",
            description: `Seja Bem-Vindo(a) ${response.data.dados_usuario.nome_usuario}!`,
            duration: 4000,
            position: "bottom-right",
            isClosable: true,
          });
          navigate("/Products");
        } else {
          toast({
            title: `Erro ao fazer Login!`,
            description: `${response.data.message}!`,
            duration: 3000,
            status: "error",
            variant: "left-accent",
            position: "bottom-left",
            isClosable: true,
          });
          navigate("/");
        }
      })
      .catch((error) => {
        toast({
          title: `Erro ao fazer Login!`,
          description: `${error.data.message}!`,
          duration: 3000,
          status: "error",
          variant: "left-accent",
          position: "bottom-left",
          isClosable: true,
        });
      });
  };

  return (
    <Flex
      bgImage="url('/banner.jpg')"
      bgSize="cover"
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      flexDirection="column"
      opacity="10"
    >
      <Text
        fontSize="3xl"
        justifyContent="center"
        align="center"
        color="#7fbc03"
      >
        Bem-vindo a Innovation Brindes
      </Text>
      <Flex
        as="form"
        mt="20px"
        w="480px"
        h={300}
        bgColor="#7fbc03"
        borderRadius={8}
        flexDir="column"
        align="center"
        justifyContent="center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack spacing="4" w="280px">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FaUser color="gray" />}
            />
            <Input
              autoFocus
              name={"email"}
              {...register("email")}
              bgColor="white"
              placeholder="Usuário"
              _placeholder={{ color: "gray" }}
              borderRadius="20px"
              focusBorderColor="white"
            />
          </InputGroup>
          <span>{errors.email?.message}</span>

          <InputGroup size="md">
            <InputLeftElement
              pointerEvents="none"
              children={<IoIosUnlock color="gray" />}
            />
            <Input
              name={"senha"}
              {...register("senha")}
              bgColor="white"
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Senha"
              _placeholder={{ color: "gray" }}
              borderRadius="20px"
              focusBorderColor="white"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? (
                  <AiFillEyeInvisible color="gray" />
                ) : (
                  <AiFillEye color="gray" />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>
          <span>{errors.senha?.message}</span>
        </Stack>
        <Flex p={2}>
          <Checkbox
            defaultIsChecked
            color="white"
            mr="2rem"
            colorScheme="white"
          >
            Manter logado
          </Checkbox>
          <Link color="white">Esqueceu a senha?</Link>
        </Flex>

        <Button
          type="submit"
          color="gray"
          mt="6"
          bg="white"
          w="30%"
          borderRadius="30px"
          size="md"
          isLoading={isSubmitting}
        >
          Login
        </Button>
      </Flex>
    </Flex>
  );
};

export default Login;
