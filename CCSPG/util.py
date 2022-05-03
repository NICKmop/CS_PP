import os
import sys
from pathlib import Path

project_root = os.getcwd();
project_root_path = Path(project_root);
print(project_root_path.parent)