to check the matrix 'ab -c 2 -n 2 http://localhost:3000/'

Eventloop can be defined as:
It is a semi-infinite loop, calling into karnel(epoll-wait or kqueue or ..), blocking untill something happened(fs module).

When does node exit?
It exits when it no longer has any events to wait for, at which point the loop must complete.

UV Thread Pool shared by:
1> fs
2> dns (only dns.lookup())
3> Crypto (only crypto.randomBytes() and crypto.pbkdf2())
4> http.get/request() (if called with a name, dns.lookup() is used)
5> any C++ addons

We can increase/decrease the thread pool size by assigning numeric value to UV_THREADPOOL_SIZE.

Keeping node server speedy: Node is fast when the work associated with each client at any given time is "small".

