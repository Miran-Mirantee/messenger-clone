"use client";

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
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ActivityInputs, Activity } from "../types";
import getActivityParams from "../actions/getActivityParams";
import { useState } from "react";

const TestPlayground = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ActivityInputs>();

  const onsubmit: SubmitHandler<ActivityInputs> = async (data) => {
    const yahoo = getActivityParams(data);

    // console.log("yahoo!", yahoo);
    const fetchedData = await getActivity(yahoo);
    console.log(fetchedData);
    setActivity(fetchedData);
  };

  const [activity, setActivity] = useState<Activity | null>();
  return (
    <div className="flex p-4 flex-col items-center">
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="w-[480px] flex flex-col gap-6"
      >
        <Card size={"md"} className="h-[224px]">
          <CardBody className="flex flex-col justify-center">
            {activity?.error ? (
              <div>
                <span className="font-bold">Error: </span>
                {activity?.error}
              </div>
            ) : (
              <>
                <div>
                  <span className="font-bold">Activity: </span>
                  {activity?.activity}
                </div>
                <div>
                  <span className="font-bold">Type: </span> {activity?.type}
                </div>
                <div>
                  <span className="font-bold">Number of participants: </span>
                  {activity?.participants}
                </div>
                <div>
                  <span className="font-bold">Price: </span>
                  {activity?.price}
                </div>
                <div>
                  <span className="font-bold">Accessibility: </span>
                  {activity?.accessibility}
                </div>
                <div>
                  <span className="font-bold">Link: </span>
                  {activity?.link}
                </div>
              </>
            )}
          </CardBody>
        </Card>
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
              const fetchedData = await getActivity();
              console.log(fetchedData);
              setActivity(fetchedData);
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
