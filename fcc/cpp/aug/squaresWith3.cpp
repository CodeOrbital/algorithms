#include <iostream>
#include <string>
using namespace std;
void squaresWith3(int n){
  int count = 0;
  for(int nth=1; nth<=n; nth++){
    string str=to_string(nth*nth);
    int l= str.length();
    for(int i=0; i<l;i++){
      if(str[i]=='3'){
        count++;
        break;
      }
    }
  }
  cout << count ;
}
int main(){
  squaresWith3(1000);
  return 0;
}