import random
import string

def main(n):
	x = ''.join(random.choice(string.ascii_lowercase + string.digits) for _ in range(n))
	print(x)
	
if __name__ == "__main__":
	n = 7
	main(n)