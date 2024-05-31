import { useState } from "react";
import { Container, Box, VStack, Text, Select, Input, Textarea, Button, HStack } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const contacts = ["Alice", "Bob", "Charlie", "David"];

const Index = () => {
  const [selectedContact, setSelectedContact] = useState("");
  const [formData, setFormData] = useState({ input: "", textarea: "" });
  const [isLinked, setIsLinked] = useState(false);

  const handleContactChange = (e) => {
    setSelectedContact(e.target.value);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, input: e.target.value });
  };

  const handleTextareaChange = (e) => {
    setFormData({ ...formData, textarea: e.target.value });
  };

  const handleLinkNodes = () => {
    if (selectedContact) {
      setIsLinked(true);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box borderWidth="1px" borderRadius="lg" p={4} width="100%">
          <Text fontSize="xl" mb={4}>
            Node 1: Select a Contact
          </Text>
          <Select placeholder="Select contact" value={selectedContact} onChange={handleContactChange}>
            {contacts.map((contact) => (
              <option key={contact} value={contact}>
                {contact}
              </option>
            ))}
          </Select>
        </Box>

        <HStack spacing={4}>
          <Button onClick={handleLinkNodes} isDisabled={!selectedContact} leftIcon={<FaArrowRight />}>
            Link to Node 2
          </Button>
        </HStack>

        <Box borderWidth="1px" borderRadius="lg" p={4} width="100%">
          <Text fontSize="xl" mb={4}>
            Node 2: Form
          </Text>
          <Input placeholder="Input" value={formData.input} onChange={handleInputChange} isDisabled={!isLinked} mb={4} />
          <Textarea placeholder="Textarea" value={formData.textarea} onChange={handleTextareaChange} isDisabled={!isLinked} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
