"use client";

import ActivityForm from "./components/ActivityForm";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";

const TestPlayground = () => {
  return (
    <div className="flex m-4 flex-col items-center">
      <FormControl className="w-[480px] flex flex-col gap-6">
        <div>
          <FormLabel>Type of activity</FormLabel>
          <Select placeholder="Select type">
            <option value="education">education</option>
            <option value="recreational">recreational</option>
            <option value="social">social</option>
            <option value="diy">diy</option>
            <option value="charity">charity</option>
            <option value="cooking">cooking</option>
            <option value="relaxation">relaxation</option>
            <option value="music">music</option>
            <option value="busywork">busywork</option>
          </Select>
        </div>
        <div>
          <FormLabel>Number of participant</FormLabel>
          <NumberInput defaultValue={1} min={1}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </div>
        <RadioGroup defaultValue="1">
          <FormLabel>Price range</FormLabel>
          <HStack>
            <Radio value="1">Free</Radio>
            <Radio value="2">Not Free</Radio>
          </HStack>
        </RadioGroup>
        <RadioGroup defaultValue="1">
          <FormLabel>Accesibility range</FormLabel>
          <HStack>
            <Radio value="1">Easy</Radio>
            <Radio value="2">Normal</Radio>
            <Radio value="3">Hard</Radio>
          </HStack>
        </RadioGroup>
        <HStack>
          <Button
            onClick={() => console.log("random")}
            colorScheme="teal"
            variant="outline"
          >
            Random
          </Button>
          <Button type="submit" colorScheme="teal">
            Submit
          </Button>
        </HStack>
      </FormControl>
    </div>
  );
};

export default TestPlayground;
