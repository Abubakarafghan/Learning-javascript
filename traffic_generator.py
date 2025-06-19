#!/usr/bin/env python3
"""
Traffic Generator Script
"""

import requests
import time

def send_traffic(url):
    """Send requests to the specified URL"""
    try:
        while True:
            requests.get(url)
            print(f"Request sent to {url}")
            time.sleep(0.1)  # Adjust the delay between requests as needed
    except KeyboardInterrupt:
        print("Stopping traffic generator...")

if __name__ == "__main__":
    target_url = "https://ealamgroup.pk"  # Replace with your website URL
    send_traffic(target_url)