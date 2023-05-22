import { PackageCard } from "../components/PackageCard";
import { useState } from "react";
import EndGif from "../../../img/lo.gif";
import { Faqs } from "../components/Faqs";
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Union from "./../../../img/Union.svg";
import Union2 from "./../../../img/Union2.svg";
import Union3 from "./../../../img/Union3.svg";
import { OutlineLinkBtn } from "../components/Btn";
import youtubecamp from "../assests/youtubecamp.jpg";
import pageseo from "../assests/pageseo.jpg";
import socialmediamarketing from "../assests/socialmediamarketing.jpg";
import emailmarketing from "../assests/emailmarketing.jpg";
// Package  Data end
let demoImg = "https://source.unsplash.com/random/500x500/?seo";
const card_data = {
  // Package One Data
  PackageOneData: [
    {
      recommendedText: "Recommended For You",
      recommendedDisplay: "none",
      packageName: "On Page Optimization",
      packageNameColor: "#DA9E2E",
      price: "₹2000/m",
      overview:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
      packageLink: "/",
      boxData: [
        {
          boxbackgroundColor: "#f1f6fa",
          boxTitle: "Features",
          boxPointsData: [
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "none",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
          ],
        },
        {
          boxbackgroundColor: "white",
          boxTitle: "Results to expect",
          boxPointsData: [
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
          ],
        },
        {
          boxbackgroundColor: "#f1f6fa",
          boxTitle: "is it for you?",
          boxPointsData: [
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
          ],
        },
      ],
    },
  ],
  // Package One Data end
  // Package two Data
  PackagetwoData: [
    {
      recommendedText: "Recommended For You",
      recommendedDisplay: "block",
      packageName: "Paid Guest Posting",
      packageNameColor: "#439dd3",
      price: "₹2001/m",
      overview:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
      packageLink: "/",
      boxData: [
        {
          boxbackgroundColor: "#f1f6fa",
          boxTitle: "Features",
          boxPointsData: [
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
          ],
        },
        {
          boxbackgroundColor: "white",
          boxTitle: "Results to expect",
          boxPointsData: [
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
          ],
        },
        {
          boxbackgroundColor: "#f1f6fa",
          boxTitle: "is it for you?",
          boxPointsData: [
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
          ],
        },
      ],
    },
  ],
  // Package two Data end
  // Package three Data
  PackagethreeData: [
    {
      recommendedText: "Recommended For You",
      recommendedDisplay: "none",
      packageName: "Guest Posting",
      packageNameColor: "#D86161",
      price: "₹2002/m",
      overview:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
      packageLink: "/",
      boxData: [
        {
          boxbackgroundColor: "#f1f6fa",
          boxTitle: "Features",
          boxPointsData: [
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "none",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "none",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
          ],
        },
        {
          boxbackgroundColor: "white",
          boxTitle: "Features",
          boxPointsData: [
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
          ],
        },
        {
          boxbackgroundColor: "#f1f6fa",
          boxTitle: "Features",
          boxPointsData: [
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
            {
              boxPoint: "5,7,10 Pages Optimized",
              boxPointTooltip: "null",
              boxPointTooltipText:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae illo odio obcaecati asperiores, expedita sit rerum culpa inventore aliquam dolore odit non in earum similique nisi at! Incidunt, fuga eos.",
              boxPointTooltipPlacement: "top",
            },
          ],
        },
      ],
    },
  ],
  PackageRightCardUiData: [
    {
      title: "Highly Rated By Clients For",
      rating: "4.5",
      ResultsData: [
        {
          resultsTitle: "High Results",
        },
        {
          resultsTitle: "High Results2",
        },
        {
          resultsTitle: "High Results3",
        },
      ],
      HighlightsData: [
        {
          points: "CTR ipsum dolor pulvinar lacus.",
        },
        {
          points: "CTR ipsum dolor pulvinar lacus.",
        },
        {
          points: "CTR ipsum dolor pulvinar lacus.",
        },
        {
          points: "CTR ipsum dolor pulvinar lacus.",
        },
        {
          points: "CTR ipsum dolor pulvinar lacus.",
        },
      ],
      DefinitionsData: [
        {
          title: "CTR",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
        },
        {
          title: "CTR",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
        },
        {
          title: "CTR",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
        },
        {
          title: "CTR",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
        },
        {
          title: "CTR",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
        },
        {
          title: "CTR",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
        },
        {
          title: "CTR",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
        },
        {
          title: "CTR",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
        },
        {
          title: "CTR",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
        },
      ],
    },
  ],
};
// Package  Data end
export const BuyPlans = () => {
  const [showEndPage, setShowEndPage] = useState(true);
  const End = () => {
    return (
      <>
        <div className="questionare_page_start">
          <div className="questionare_page_end">
            <img
              className="questionare_page_end_logo"
              src="https://wewakedev.github.io/Maxlence-Official-Website/assests/maxlogodark.png"
              alt="logo"
            />
            <h3>Perfect marketing with perfect Partner</h3>
            <img className="gif_img" src={EndGif} alt="gif" />
            <div className="questionare_page_end_hr_div">
              <hr />
            </div>
            <p>
              on the way to your <span> solution</span>
            </p>
            <button onClick={() => setShowEndPage(false)} className=" mt-4">
              Buy Plans
            </button>
          </div>
        </div>
      </>
    );
  };
  return <>{showEndPage ? <End /> : <Package />}</>;
};

const Package = () => {
  return (
    <div className="mt-5">
      <PackageCard {...card_data} />
      <Faqs catId={1} />
      <OurClients />
      <ViewCaseStudies />
      <div className="cart_slider_top_div mt-5">
        <div className="container">
          <SliderBottom title="Services related to this service" />
          <SliderBottom title="Frequently purchased" />
        </div>
      </div>
    </div>
  );
};

const OurClients = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  const OurClientsData = [
    {
      img: "https://source.unsplash.com/random/500x500/?beautiful,girl",
      name: "Raymond Galario",
      subName: "Sydney, Australia",
      text: "It is very clear the impact your team is making. You  guys are doing a great job on targeted leads. In fact, we closed a lead directly through your marketing efforts last year that has resulted in over half a million dollars in revenue!”",
    },
    {
      img: "https://source.unsplash.com/random/500x500/?beautiful,girl",
      name: "Raymond Galario",
      subName: "Sydney, Australia",
      text: "It is very clear the impact your team is making. You  guys are doing a great job on targeted leads. In fact, we closed a lead directly through your marketing efforts last year that has resulted in over half a million dollars in revenue!”",
    },
    {
      img: "https://source.unsplash.com/random/500x500/?beautiful,girl",
      name: "Raymond Galario",
      subName: "Sydney, Australia",
      text: "It is very clear the impact your team is making. You  guys are doing a great job on targeted leads. In fact, we closed a lead directly through your marketing efforts last year that has resulted in over half a million dollars in revenue!”",
    },
    {
      img: "https://source.unsplash.com/random/500x500/?beautiful,girl",
      name: "Raymond Galario",
      subName: "Sydney, Australia",
      text: "It is very clear the impact your team is making. You  guys are doing a great job on targeted leads. In fact, we closed a lead directly through your marketing efforts last year that has resulted in over half a million dollars in revenue!”",
    },
    {
      img: "https://source.unsplash.com/random/500x500/?beautiful,girl",
      name: "Raymond Galario",
      subName: "Sydney, Australia",
      text: "It is very clear the impact your team is making. You  guys are doing a great job on targeted leads. In fact, we closed a lead directly through your marketing efforts last year that has resulted in over half a million dollars in revenue!”",
    },
  ];
  return (
    <>
      <section className=" container">
        <div className="our_clients_top_div">
          <div className="our_clients_top_div_title">
            <h3>Our Clients Love The Results</h3>
          </div>
          <div className="our_clients_top_union1">
            <div className="our_clients_top_union_inner">
              <img src={Union} alt="Union" />
              <p>
                1924+ <br /> Users
              </p>
            </div>
          </div>
          <div className="our_clients_top_union2">
            <div className="our_clients_top_union_inner2">
              <img src={Union2} alt="Union" />
              <p>
                1.65K <br /> Clicks
              </p>
            </div>
          </div>
          <div className="our_clients_top_union3">
            <div className="our_clients_top_union_inner3">
              <img src={Union3} alt="Union" />
              <p>
                339 <br /> Conversions
              </p>
            </div>
          </div>
          <Slider {...settings}>
            {OurClientsData.map((val, i) => (
              <div key={i}>
                <div className="our_clients_item_div_top">
                  <div className="our_clients_item_div">
                    <div className="our_clients_item_img_div">
                      <img src={val.img} alt="img" />
                    </div>
                    <h3>{val.name}</h3>
                    <span>{val.subName}</span>
                    <ul>
                      <li>
                        <AiFillStar />
                      </li>
                      <li>
                        <AiFillStar />
                      </li>
                      <li>
                        <AiFillStar />
                      </li>
                      <li>
                        <AiFillStar />
                      </li>
                      <li>
                        <AiFillStar className=" text-white" />
                      </li>
                    </ul>
                    <div className="our_clients_item_div_text">
                      <FaQuoteLeft className="Svg1" />
                      <p>{val.text}</p>
                      <FaQuoteRight className="Svg2" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};
const ViewCaseStudies = () => {
  return (
    <>
      <section className="  container mt-5">
        <div className=" ">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="view_case_studies_text_div">
                <h3>
                  Boost Your <span>Online Presence</span> with Our SEO Services
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mattis sed morbi adipiscing diam tempor. Aliquam vehicula quis
                  tincidunt arcu, risus diam, tincidunt eu dictum. Ullamcorper.
                </p>
                <div className="btn_div">
                  <OutlineLinkBtn
                    link="/case_study"
                    title="View Case studies"
                  />
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div
                className="view_case_studies_img shadow"
                style={{ backgroundImage: `url(${demoImg})` }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
const SliderBottom = (props) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    // autoplay: true,
    // speed: 4000,
    // autoplaySpeed: 4000,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="my_slick_slider_title">
        <h2 className="py-2">{props.title}</h2>
      </div>
      <Slider className="slidebluearrows my_slick_slider py-2" {...settings}>
        <div className="productCards col-md-3 col-6">
          <div className="productImageContainer">
            <img
              className="productimg w-80 m-auto"
              alt="Products"
              src={youtubecamp}
            />
          </div>
          <div className="productDetailsContainer ms-4 my-3">
            <p className="productTitle mb-1">Youtube Campaign</p>
            <h5 className="productPrice">$ &nbsp;100</h5>
          </div>
        </div>
        <div className="productCards col-md-3 col-6">
          <div className="productImageContainer">
            <img
              className="productimg w-80 m-auto"
              alt="Products"
              src={pageseo}
            />
          </div>
          <div className="productDetailsContainer ms-4 my-3">
            <p className="productTitle mb-1">Youtube Campaign</p>
            <h5 className="productPrice">$ &nbsp;100</h5>
          </div>
        </div>
        <div className="productCards col-md-3 col-6">
          <div className="productImageContainer">
            <img
              className="productimg w-80 m-auto"
              alt="Products"
              src={socialmediamarketing}
            />
          </div>
          <div className="productDetailsContainer ms-4 my-3">
            <p className="productTitle mb-1">Youtube Campaign</p>
            <h5 className="productPrice">$ &nbsp;100</h5>
          </div>
        </div>
        <div className="productCards col-md-3 col-6">
          <div className="productImageContainer">
            <img
              className="productimg w-80 m-auto"
              alt="Products"
              src={emailmarketing}
            />
          </div>
          <div className="productDetailsContainer ms-4 my-3">
            <p className="productTitle mb-1">Youtube Campaign</p>
            <h5 className="productPrice">$ &nbsp;100</h5>
          </div>
        </div>
        <div className="productCards col-md-3 col-6">
          <div className="productImageContainer">
            <img
              className="productimg w-80 m-auto"
              alt="Products"
              src={youtubecamp}
            />
          </div>
          <div className="productDetailsContainer ms-4 my-3">
            <p className="productTitle mb-1">Youtube Campaign</p>
            <h5 className="productPrice">$ &nbsp;100</h5>
          </div>
        </div>
        <div className="productCards col-md-3 col-6">
          <div className="productImageContainer">
            <img
              className="productimg w-80 m-auto"
              alt="Products"
              src={emailmarketing}
            />
          </div>
          <div className="productDetailsContainer ms-4 my-3">
            <p className="productTitle mb-1">Youtube Campaign</p>
            <h5 className="productPrice">$ &nbsp;100</h5>
          </div>
        </div>
      </Slider>
    </>
  );
};
