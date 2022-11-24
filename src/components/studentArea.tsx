import {
  Card,
  CardBody,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Button,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

const StudentArea = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <GridItem width={"100%"} h={"15rem"}>
        <Card
          direction={{ base: "column", sm: "row" }}
          backgroundColor={"white"}
          overflow="hidden"
          variant="outline"
          shadow={"lg"}
          h={"100%"}
          padding={2}
        >
          {" "}
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            borderRadius={100}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />
          <Stack>
            <CardBody>
              {/* Phone number of the student 6.
              Present or current level of the student 7. Email of the student 8.
              School fees payment status. 9. Accommodation */}
              <Heading size="md" pb={3}>
                Matric/Reg number:
              </Heading>
              <Flex direction={"column"} gap={3}>
                <Text variant={"solid"}>Full name:</Text>
                <Text>Department:</Text>
                <Text> Faculty:</Text>
                <Text>Programe:</Text>
              </Flex>
            </CardBody>
          </Stack>
        </Card>
      </GridItem>

      {/* NO:2 */}
      <GridItem width={"100%"} h={"15rem"}>
        <Card backgroundColor={"white"} shadow={"lg"} p="5" h="100%">
          {" "}
          <Heading size="md" pb={5}>
            School Charges And Current Registration Status
          </Heading>
          <Divider orientation="horizontal" />
          <Flex direction={"column"} gap={5}>
            <Text>Department:</Text>
            <Text> Faculty:</Text>
            <Text>Programe:</Text>
          </Flex>
        </Card>
      </GridItem>

      {/* NO:3 */}
      <GridItem width={"100%"} h={"auto"}>
        <Card backgroundColor={"white"} shadow={"lg"} p="5" h="100%">
          {" "}
          <Heading size="md" pb={5}>
            Password Management
          </Heading>
          <Divider orientation="horizontal" />
          <FormControl textAlign={"center"}>
            <FormLabel>Old Password</FormLabel>
            <Input type="password" />

            <FormLabel>New Password</FormLabel>
            <Input type="password" />

            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" />

            <Button w={"60%"} mt={3} colorScheme="blue">
              Change
            </Button>
          </FormControl>
        </Card>
      </GridItem>

      {/* NO:4 */}
      <GridItem width={"100%"} h={"max"}>
        <Card backgroundColor={"white"} shadow={"lg"} p="5" h="100%">
          {" "}
          <Heading size="md" pb={5}>
            Email & Phone Number Update
          </Heading>
          <Divider orientation="horizontal" />
          <FormControl textAlign={"center"}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="unijosportal@unijos.edu.ng" />

            <FormLabel my={3}>Phone Number</FormLabel>
            <InputGroup>
              <InputLeftAddon children="+234" />
              <Input type="tel" placeholder="80 xxx xxx xx" />
            </InputGroup>
            <Button w={"60%"} mt={3} colorScheme="blue">
              Update
            </Button>
          </FormControl>
        </Card>
      </GridItem>
      {/* NO:5 */}
      <GridItem width={"100%"} h={"15rem"}>
        <Card backgroundColor={"white"} shadow={"lg"} p="5" h="100%">
          {" "}
          <Heading size="md" pb={5}>
            School Charges And Current Registration Status
          </Heading>
          <Divider orientation="horizontal" />
          <Flex direction={"column"} gap={5}>
            <Text>Department:</Text>
            <Text> Faculty:</Text>
            <Text>Programe:</Text>
          </Flex>
        </Card>
      </GridItem>
    </Grid>
  );
};

export default StudentArea;
