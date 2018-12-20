---
title: 'Georgetown College Minecraft ALU '
date: 2015-01-20 00:00:00 Z
tags:
- learntocode
- language
- maker
- minecraft
layout: post
description: A group of college Computer Science students and their professor discuss
  how they built an Arithmetic Logic Unit using Minecraft
---

by Danny Thorne

Computers are organized into several different components with distinct roles that work together. The component responsible for performing operations on numbers is called the Arithmetic Logic Unit or ALU. It is made out of transistors. A transistor does one simple thing: it inverts a signal, i.e., makes a low signal high and a high signal low. Minecraft has something analogous to a transistor, namely the redstone torch. Just as lots of transistors can be combined to build an ALU in an actual computer, lots of redstone torches can be combined to build a virtual ALU inside of Minecraft.

<!--more-->

That's what we did in CSC312 Organization and Architecture at [Georgetown College](http://www.georgetowncollege.edu/) this past fall 2014 semester. Instead of just discussing the circuits in terms of logic diagrams like this

![Logic diagram](/img/blog/alu-logic-diagram.png)

we all got together in a Minecraft world and *built* them. The above circuit can be implemented in Minecraft like this (among other ways):

![Minecraft computer detail](/img/blog/alu-minecraft-detail.png)

Our ALU consists of a circuit that adds and subtracts 8-bit binary numbers, a circuit that multiplies by 2 (shift left), and a circuit that divides by 2 (shift right). It is attached to four 8-bit registers. Decoders and multiplexers are used to select which words from the register get routed into the ALU, which operation the ALU performs, and which word in the register gets loaded with the result. One of the students, Jeff Hartman, wrote more about the details of the ALU at [http://hehfay.github.io/CSC312/](http://hehfay.github.io/CSC312/) .

We still had to understand the circuits in terms of traditional diagrams, but then implementing them in Minecraft reinforced and extended that understanding. The gratification of building a working product made the process more engaging as well, not to mention that walking and flying through a huge working circuit of one's own construction can be exhilarating!

![Computer ALU built in Minecraft](/img/blog/alu-minecraft-computer.png)

Our Minecraft world is available [here](http://gchpcc.georgetowncollege.edu/~dthorne0/GeorgetownCollegeMinecraftALU2014.zip)  for anyone who is interested in exploring our construction. (Unzip it in your Minecraft saves folder. It's a big structure. Increase render distance for best viewing.)