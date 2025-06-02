"use client";
import { baseUrl } from "@/config/api";
import axios from "axios";
import React, { useEffect, useState } from "react";

const url = baseUrl;
const useFetch = <T,>() => {
  const [datas, setDatas] = useState<T | null>(null);
  const [status, setstatus] = useState<
    "idle" | "pending" | "resolved" | "rejected"
  >("idle");
  const get = async () => {
    try {
      setstatus("pending");
      const response = await axios.get(`${url}/books`);
      setstatus("resolved");
      setDatas(response.data);
      return response.data;
    } catch (error) {
      setstatus("rejected");
    }
  };

  const post = async (endpoint: string, data: object) => {
    try {
      setstatus("pending");
      const response = await axios.post(`${url}/${endpoint}`, data, {
        headers: {},
      });
      setstatus("resolved");
      setDatas(response.data);
      return { sucess: true };
    } catch (error) {
      setstatus("rejected");
    }
  };

  const remove = async (endpoint: string, id: number) => {
    try {
      setstatus("pending");
      await axios.delete(`${url}/${endpoint}/${id}`);
      setstatus("resolved");

      setDatas((prev: any) => {
        return prev.filter((item: any) => item.id !== id);
      });
    } catch (error) {
      setstatus("rejected");
      console.error("DELETE error:", error);
    }
  };

  return { datas, status, post, get, remove };
};

export default useFetch;
