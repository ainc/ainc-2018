---
title: A Swift Overview of Swift
date: 2014-07-08 00:00:00 Z
tags:
- learntocode
- swift
- apple
- ios
layout: post
description: A look at Apple's new programming language for iOS and OSX, Swift
---

by Danny Thorne

On June 2, 2014 at [WWDC](https://developer.apple.com/videos/wwdc/2014/), Apple announced a new programming language called [Swift](https://developer.apple.com/swift/). Let's take a look at why and briefly highlight some of its pros and cons.

The standard language for Apple iOS and OS X development is [Objective-C](http://en.wikipedia.org/wiki/Objective-C). It is an extension of the original C language, a language that is notoriously difficult to learn and tricky to use. Apple proposes the Swift language as a replacement for Objective-C that is easier to learn and use. At least two other strategies drive its design: it should be interoperable with Objective-C, and it should be fast.

![Swift playground, image from Apple &copy;](/img/blog/swift_overview_0.jpg)

<!--more-->

Swift brings language features that are familiar to and welcomed by many programmers today. It supports [tuples](http://en.wikipedia.org/wiki/Tuple), multi-valued expressions that make it easy to write functions that return multiple values and allow shortcuts like assignment statements involving multiple variables. Swift also makes it easy to define functions that accept a variable number of arguments. It supports operator overloading, including custom operators. It supports natural string manipulation like a scripting language. Functions in Swift can be passed to other functions and returned by other functions. Swift is strongly typed, but types can be inferred. Swift includes generics (generic functions and generic types), anonymous parameters ($0, $1, $2, ...), default arguments, and elaborate pattern matching in switch statements.

Swift is designed to make the programmer less error prone. It does array bounds checking, it requires variables always to be initialized, it is [type safe](http://en.wikipedia.org/wiki/Type_safety), it provides flexibility of syntax with semicolons and parens, and it requires the use of braces around the bodies of if-statements and loops (even if the body is a one-liner). It doesn't include pointers, per se, at least on the surface. Assignment statements cannot be used as conditions in if-statements. In fact, all conditional expressions must be legitimate Boolean expressions. There is no fall-through by default in cases of switch statements. All of these features eliminate common pitfalls in programming.

Considering the way Swift is designed to feel more like a scripting language than a typical systems language, one might expect to see a trade-off in performance. According to Apple, however, Swift programs run even faster than Objective-C programs. The two benchmark results presented during the announcement at WWDC show Swift running 40% faster in one case and 73% faster in another case relative to Objective-C.

The most glaring drawback to Swift is the simple fact that it is a new language, and for current iOS and OS X developers there will be an overhead cost to learning the new language and incorporating it into their practice. For businesses, there will be the cost of converting existing Objective-C code to Swift. However, this is mitigated by the way that Apple has developed Swift to work "side-by-side" with Objective-C, so it is not necessary to choose one or the other exclusively. Additionally, Xcode automatically generates Swift versions of Objective-C API headers.

There are a few things missing in Swift. There is no exception handling. There are currently no concurrency features built in to the Swift language. Swift does not include garbage collection, instead relying on ARC, the same automatic reference counting mechanism used for Objective-C in LLVM. There is currently no access control (e.g., public, private, protected) in user defined types. Some of these omissions will undoubtedly be addressed in future versions.

It is too early to judge Swift, but, based on the first week of buzz in the community, optimism and excitement prevail for now!