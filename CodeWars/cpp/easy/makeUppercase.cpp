#include <string>
using namespace std ;
string makeUpperCase( string str) {
  for(int i=0;i<str.length();i++){
  	str[i]=toupper(static_cast<char>(str[i]));
  }
  return str;
}
#include <iostream>
int main(){
	cout << makeUpperCase("Hello");
	return 0;
}