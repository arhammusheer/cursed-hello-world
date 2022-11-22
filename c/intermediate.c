#include <stdio.h>
int main() {
    char* hello = "Hello, World!";
    int i = 0;
    while (hello[i] != '\0') {
        printf("%c", hello[i]);
        i++;
    }
    return 0;
}