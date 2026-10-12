#include <string>
#include <cctype>
using namespace std;
string abbrevName(string name)
{
	string abbreviation = string(1, static_cast<char>(toupper(name[0]))) + string(1, '.');
	bool storeLetter = false;
	for (int l = 0; l < name.length(); l++)
	{
		if (name[l] == ' ')
		{
			storeLetter = true;
			continue;
		}
		if (storeLetter)
		{
			abbreviation += toupper(name[l]);
			break;
		}
	}
	return abbreviation;
}