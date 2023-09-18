"use client";

import ActivityForm from "./components/ActivityForm";
import getActivity from "../actions/getActivity";
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
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  type?: string;
  participants?: number;
  priceRange?: number;
  accessibilityRange?: number;
};

const TestPlayground = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onsubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(await getActivity());
  };
  return (
    <div className="flex m-4 flex-col items-center">
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="w-[480px] flex flex-col gap-6"
      >
        <FormControl>
          <FormLabel>Type of activity</FormLabel>
          <Select placeholder="Select type" {...register("type")}>
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
        </FormControl>
        <FormControl>
          <FormLabel>Number of participant</FormLabel>
          <NumberInput min={1}>
            <NumberInputField {...register("participants")} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <RadioGroup>
          <FormLabel>Price range</FormLabel>
          <HStack>
            <Radio value="1" {...register("priceRange")}>
              Free
            </Radio>
            <Radio value="2" {...register("priceRange")}>
              Cheap
            </Radio>
            <Radio value="3" {...register("priceRange")}>
              Costly
            </Radio>
          </HStack>
        </RadioGroup>
        <RadioGroup>
          <FormLabel>Accesibility range</FormLabel>
          <HStack>
            <Radio value="1" {...register("accessibilityRange")}>
              Easy
            </Radio>
            <Radio value="2" {...register("accessibilityRange")}>
              Normal
            </Radio>
            <Radio value="3" {...register("accessibilityRange")}>
              Hard
            </Radio>
          </HStack>
        </RadioGroup>
        <HStack>
          <Button
            onClick={async () => {
              console.log(await getActivity());
            }}
            colorScheme="teal"
            variant="outline"
          >
            Random
          </Button>
          <Button type="submit" colorScheme="teal" className="bg-[#319795ec]">
            Submit
          </Button>
        </HStack>
      </form>
    </div>
  );
};

export default TestPlayground;
