import React from "react";
import "./LessonDetail.css";
import DropdownMenu from "./DropdownMenu";

const LessonDetail = () => {
  return (
    <div className="lesson-detail-container">
      <div className="sidebar">
        <DropdownMenu
          title="Introduction"
          topics={["Topic #1", "Topic #2", "Topic #3"]}
        />
        <DropdownMenu
          title="Syntax"
          topics={["Topic #1", "Topic #2", "Topic #3"]}
        />
        <DropdownMenu
          title="Variables"
          topics={["Topic #1", "Topic #2", "Topic #3"]}
        />
      </div>
      <div className="lesson-content">
        <div className="lesson-row">
          <h2>Print Statement</h2>
          <div className="code-block">
            <pre>
              <code>{`# Python code to print "Hello, World!"
print("Hello, World!")`}</code>
            </pre>
          </div>
          <div className="explanation">
            <p>
              In this example, we use Python's built-in <code>print()</code>{" "}
              function to display "Hello, World!" on the console. It's a simple
              way to start learning Python and see some output on the screen. In
              Python, the <code>print()</code> function is used to display
              output to the console. In this code example, we have declared two
              variables, <code>name</code> and <code>age</code> , and then used
              the <code>print()</code> function to display a message that
              includes the values of these variables. The <code>print()</code>{" "}
              function accepts multiple arguments, and they are automatically
              separated by a space when displayed on the console.
            </p>
          </div>
        </div>

        <div className="lesson-row">
          <h2>
            Variable Assignment and Conditional Statements (<code>if-else</code>
            )
          </h2>
          <div className="code-block">
            <pre>
              <code>{`# Variable assignment and arithmetic operations
x = 10
y = 5

# Addition
sum = x + y

# Subtraction
difference = x - y

# Multiplication
product = x * y

# Division
quotient = x / y

# Generic code example for if-else conditional statement
num = 10
if num > 0:
    print("The number is positive.")
elif num == 0:
    print("The number is zero.")
else:
    print("The number is negative.")`}</code>
            </pre>
          </div>
          <div className="explanation">
            <p>
              In this code, we declare two variables <code>x</code> and{" "}
              <code>y</code>, and perform some basic arithmetic operations. We
              calculate the sum, difference, product, and quotient using
              addition, subtraction, multiplication, and division, respectively.
              Conditional statements in Python allow us to execute different
              blocks of code based on certain conditions. In this code example,
              we have a variable <code>num</code>, and we use an{" "}
              <code>if-else</code> statement to check whether it is positive,
              zero, or negative. If <code>num</code> is greater than zero, the
              first block of code will be executed and print "The number is
              positive." If <code>num</code> is equal to zero, the second block
              of code will be executed and print "The number is zero." If{" "}
              <code>num</code> is negative, the third block of code will be
              executed and print "The number is negative."
            </p>
          </div>
        </div>

        <div className="lesson-row">
          <h2>String Concatenation</h2>
          <div className="code-block">
            <pre>
              <code>{`# Strings and String Concatenation
first_name = "John"
last_name = "Doe"

# Concatenating first_name and last_name
full_name = first_name + " " + last_name

# String formatting with placeholders
age = 25
message = "My name is {} and I am {} years old.".format(full_name, age)`}</code>
            </pre>
          </div>
          <div className="explanation">
            <p>
              In this code, we work with strings and demonstrate string
              concatenation. We have two variables <code>first_name</code> and{" "}
              <code>last_name</code>, and we use the <code>+</code> operator to
              concatenate them with a space in between to form the{" "}
              <code>full_name</code>. Additionally, we use string formatting
              with placeholders to create a message with the person's name and
              age.
            </p>
          </div>
        </div>

        <div className="lesson-row">
          <h2>Video Explanation</h2>
          <div className="youtube-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/cQT33yu9pY8"
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;
