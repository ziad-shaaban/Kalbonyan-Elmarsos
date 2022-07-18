import java.util.Stack;
public class MyClass {
	public static void main(String args[]) {
		Stack myStack = new Stack();
		myStack.push("hi");
		myStack.pop();
        //if we add another pop() statment we will get an error because there are no items for poping
        // only push() method is working
	}
}
