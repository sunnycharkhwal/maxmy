import { NavLink } from "react-router-dom";
import VM1 from "../../../img/vm1.svg";
import VM2 from "../../../img/vm2.png";
import VM3 from "../../../img/vm3.svg";
import VM4 from "../../../img/vm4.svg";
import VM5 from "../../../img/vm5.svg";
import VM6 from "../../../img/vm6.svg";
import React from "react";
import CountUp from "react-countup";
import { PackageCard } from "../components/PackageCard";
import { DrawerLeft } from "../components/DrawerLeft";
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
export const VideoMarketing = () => {
  return (
    <>
      <div className="video_top_main_div services_modal_page_div">
        <div className="services_modal_page_inner" style={{ left: "0" }}>
          <DrawerLeft data="growth_page" />
        </div>
        <TopDiv />
      </div>
      <section className=" container mt-5 mb-5">
        <StopVideo />
      </section>
      <div className="video_top_main_div2">
        <MyCountUp />
      </div>
      <section className="container mt-5">
        <Banner />
      </section>
      <section className=" mt-5">
        <PackageCard {...card_data} />
      </section>
      <section className="mt-5 ">
        <GetInTouchVideo />
      </section>
    </>
  );
};
const TopDiv = () => {
  return (
    <>
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 order-md-1 order-2 col-12  video_TopDiv_title_div">
          <div className="video_TopDiv_title">
            <h1 className="all_h1_title">
              <span>Power to Engage.</span> <br /> Hold the Attention.
            </h1>
            <p className="all_h1_title_p">
              Video has the power to engage and hold the attention of your
              customers like no other type of content. We can help you produce
              video marketing campaigns that reach your potential customers
              where and when they’re buying.
            </p>
            <NavLink to="/Questionare_Page" className="btn full_btn">
              Get Started
            </NavLink>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 order-md-2 order-1 col-12 ">
          <div
            className="vm1_img"
            style={{
              backgroundImage: `url(${VM1})`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};
const StopVideo = () => {
  return (
    <>
      <div className="row">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12  col-12 order-md-1 order-2 ">
          <div
            className="vm2_img"
            style={{
              backgroundImage: `url(${VM2})`,
            }}
          ></div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12  col-12 order-md-2 order-1  video_TopDiv_title_div">
          <div className=" video_TopDiv_title_2">
            <h2 className="all_h1_title">
              Stop avoiding video marketing and jump in
            </h2>
            <p className="all_h1_title_p">
              Lorem ipsum dolor sit amet consectetur. Dolor turpis felis varius
              a iaculis. Aliquet mauris ut aenean cras et amet diam donec.
              Turpis purus egestas a vel tellus libero adipiscing. Vehicula
              etiam viverra faucibus enim feugiat est purus scelerisque
              volutpat. Libero ac morbi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const MyCountUp = () => {
  return (
    <>
      <div className=" container">
        <div className="row g-4">
          <div className="col-12">
            <div className="MyCountUp_text_div">
              <h3 className="all_h1_title">Did You Know?</h3>
              <p className="all_h1_title_p">
                You already know that video marketing is rapidly becoming the
                must-have component to every digital marketing <br />
                <span>strategy, but here’s why it matters:</span>
              </p>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="MyCountUp_top_div">
              <img src={VM3} alt="icon" />
              <div className="MyCountUp_div">
                <div className="MyCountUp_div_inner">
                  <CountUp start={0} end={88} duration={2} />
                  <small>%</small>
                </div>
              </div>
              <p>
                88% of brands are dedicated to spending more on video campaigns
                in the future
              </p>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="MyCountUp_top_div">
              <img src={VM4} alt="icon" />
              <div className="MyCountUp_div">
                <div className="MyCountUp_div_inner">
                  <CountUp start={0} end={95} duration={2} />
                  <small>%</small>
                </div>
              </div>
              <p>
                Video marketing increase user understanding of product or
                service by 95%
              </p>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="MyCountUp_top_div">
              <img src={VM5} alt="icon" />
              <div className="MyCountUp_div">
                <div className="MyCountUp_div_inner">
                  <CountUp start={0} end={78} duration={2} />
                  <small>%</small>
                </div>
              </div>
              <p>
                78% of businesses say they received more traffic after
                implementing videos in their content strategies
              </p>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="MyCountUp_top_div">
              <img src={VM6} alt="icon" />
              <div className="MyCountUp_div">
                <div className="MyCountUp_div_inner">
                  <CountUp start={0} end={52} duration={2} />
                  <small>%</small>
                </div>
              </div>
              <p>
                52% of marketers say video is the type of content with the best
                ROI
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Banner = () => {
  return (
    <>
      <div className="Banner_text_div">
        <h3 className="all_h1_title">
          Even small businesses can make <br />
          <span>
            a <span>big impact</span>
          </span>
        </h3>
        <p className="all_h1_title_p">
          DMi Partners is an email marketing agency that understands the value
          of our clients’ investment. Our clients routinely tell us that their
          1st party owned database of email subscribers is their most valuable
          investment. Additionally, our clients understand that the success of
          nearly all of their marketing campaigns rely on email to achieve
          positive ROI for those additional channels. Executing through email to
          persuade a conversion, retain customers, re-engage cold conversations
          and drive additional/repeat purchases are crucial to our customers’
          businesses. Optimizations to these initiatives funnels additional
          dollars to future marketing and makes additional channels viable.
        </p>
      </div>
    </>
  );
};

const GetInTouchVideo = () => {
  return (
    <>
      <div className="get_in_touch_video">
        <div className="get_in_touch_video_inner">
          <h3>We’d love to be your partner</h3>
          <NavLink to="/getintouch" className="btn outline_btn">
            Get In Touch
          </NavLink>
        </div>
      </div>
    </>
  );
};
