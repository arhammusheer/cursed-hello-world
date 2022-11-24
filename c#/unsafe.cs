using System;

public class HelloWorld
{ 
  unsafe public void writeHelloWorld(char[] chrArray)
  {
    fixed(char *parr = chrArray)
    {
      char *pch = parr;
      for(int i=0; i<chrArray.Length; i++)
        Console.Write(*(pch+i));
    }
  }

  public static void Main() 
  {
    HelloWorld hw = new HelloWorld();
    char[] chrHelloWorld = new char[] 
        {'H','e','l','l','o', ' ', 'W','o','r','l','d'};
    hw.writeHelloWorld(chrHelloWorld);
  }
}