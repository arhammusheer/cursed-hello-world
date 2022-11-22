void print_char(char c) {
    write(1, &c, 1);
}
void print_string(char *s) {
    while (*s) {
        print_char(*s);
        s++;
    }
}
void main() {
    print_string("Hello, World!");
}