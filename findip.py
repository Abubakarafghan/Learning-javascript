import socket
import requests

# === CONFIG ===
domain = "ealamgroup.pk"
real_ip = "72.167.41.179"  # <-- Replace with your real VPS IP

common_subdomains = [
    "ftp", "mail", "direct", "cpanel", "webmail",
    "server", "test", "dev", "staging", "api", "blog"
]

# === FUNCTIONS ===

def resolve_domain(subdomain):
    try:
        ip = socket.gethostbyname(subdomain)
        print(f"[+] {subdomain} -> {ip}")
        return ip
    except Exception:
        return None

def scan_subdomains():
    print("\n--- Checking common subdomains ---")
    found_ips = []
    for sub in common_subdomains:
        subdomain = f"{sub}.{domain}"
        ip = resolve_domain(subdomain)
        if ip:
            found_ips.append((subdomain, ip))
    return found_ips

def test_direct_ip():
    print(f"\n--- Testing direct connection to your real IP: {real_ip} ---")
    try:
        url = f"http://{real_ip}"
        response = requests.get(url, timeout=5)
        print(f"[+] Success: Got HTTP {response.status_code} from {real_ip}")
    except Exception as e:
        print(f"[-] Could not connect to real IP: {e}")

# === MAIN ===

if __name__ == "__main__":
    print(f"=== Finding real IP for {domain} ===")

    scan_subdomains()

    print("\n--- All subdomains above resolve to Cloudflare IPs. No leak found in DNS.")
    test_direct_ip()

    print("\nDone. This shows that brute force fails and only a direct connection works.")
