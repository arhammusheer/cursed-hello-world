using System;
using System.Reflection;

namespace HelloWorldNS
{
    public class HelloWorld
    {
        public string writeHelloWorld()
        {
            return "HelloWorld";
        }
        public static void Main(string[] args)
        {
            Type hw = Type.GetType(args[0]);
            object[] nctorParams = new object[] { };
            object nobj = Activator.CreateInstance(hw,
                     nctorParams);
            object[] nmthdParams = new object[] { };
            string strHelloWorld = (string)hw.InvokeMember(
                    "writeHelloWorld", BindingFlags.Default |
                    BindingFlags.InvokeMethod, null,
                    nobj, nmthdParams);
            Console.WriteLine(strHelloWorld);
        }
    }
}