import java.util.Scanner;

public class index{
    public static void main(String []args){
        Scanner sc=new Scanner(System.in);

        // bring the 10's  & 1000's place value

        //digit
       System.out.println("please provide the the number above 4 digit");
       int a=sc.nextInt();
      
  //  divison and reminder

    //324%10
      int count=0;       

  while(a>0){
count++;
           int digit=a%10;          
if(count==2  ){
   System.out.println(digit*10);
}
else   if(count==4){
System.out.println(digit*1000);
}
    // System.out.println(digit);

   a=  a/10;

  }

    }
}