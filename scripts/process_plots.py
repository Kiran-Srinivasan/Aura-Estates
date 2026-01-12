import json
import random
import os

# Placeholder for real GIS processing
# Ideally we would use:
# import geopandas as gpd
# import folium

def generate_placeholder_data():
    """
    Generates a placeholder GeoJSON file for Kabini plots.
    This simulates the output of processing a Shapefile/AutoCAD file.
    Center: 11.93, 76.35
    """
    
    plots = []
    # Real Lat/Lng from Google Maps
    # Top-Left approx start for the grid
    # Adjusted based on visual feedback (Grid was too high/North)
    base_lat = 11.94865 
    base_lng = 76.27530

    # Spacing and Size scaling
    # 30-40ft ~ 0.0001 degrees
    # We'll use small steps to pack them tight like the image
    col_step = 0.00025  # Horizontal spacing
    row_step = 0.00027  # Vertical spacing (Reduced to bring rows closer if they were too spread, or kept similar)
    plot_width = 0.00022 # Slightly wider
    plot_height = 0.00022

    # ... (Meta data matches previous tool call) ...
    # Plot Metadata dictionary (ID -> {Area, Dimensions, Status})
    plot_data = [
        # ROW 1 (Top - North Facing) - Plots 34 to 24 (Left to right)
        {"id": 34, "area": "7500 Sq.ft", "dimensions": "7500 + 900", "facing": "North"},
        {"id": 33, "area": "8400 Sq.ft", "dimensions": "7500 + 900", "facing": "North"},
        {"id": 36, "area": "8400 Sq.ft", "dimensions": "7500 + 900", "facing": "North"}, 
        {"id": 35, "area": "9600 Sq.ft", "dimensions": "7500 + 900", "facing": "North"},
        {"id": 38, "area": "8400 Sq.ft", "dimensions": "7500 + 900", "facing": "North"},
        {"id": 37, "area": "8200 Sq.ft", "dimensions": "7320 + 900", "facing": "North"}, # Renamed from 33 to 37 for uniqueness
        {"id": 26, "area": "8040 Sq.ft", "dimensions": "7140 + 900", "facing": "North"},
        {"id": 27, "area": "7500 Sq.ft", "dimensions": "6600 + 900", "facing": "North"},
        {"id": 28, "area": "8750 Sq.ft", "dimensions": "7700 + 1050", "facing": "North"},
        {"id": 25, "area": "7560 Sq.ft", "dimensions": "6660 + 900", "facing": "North"},
        {"id": 24, "area": "12280 Sq.ft", "dimensions": "10705 + 1575", "facing": "North"},

        # ROW 2 (Middle - North Facing)
        {"id": 12, "area": "6900 Sq.ft", "dimensions": "6000 + 900", "facing": "North"},
        {"id": 13, "area": "6900 Sq.ft", "dimensions": "6000 + 900", "facing": "North"},
        {"id": 14, "area": "6900 Sq.ft", "dimensions": "6000 + 900", "facing": "North"},
        {"id": 15, "area": "6900 Sq.ft", "dimensions": "6000 + 900", "facing": "North"},
        {"id": 16, "area": "6900 Sq.ft", "dimensions": "6000 + 900", "facing": "North"},
        {"id": 17, "area": "6900 Sq.ft", "dimensions": "6000 + 900", "facing": "North"},
        {"id": 18, "area": "6325 Sq.ft", "dimensions": "5500 + 825", "facing": "North"},
        {"id": 19, "area": "6900 Sq.ft", "dimensions": "6000 + 900", "facing": "North"},
        {"id": 29, "area": "6900 Sq.ft", "dimensions": "6000 + 900", "facing": "North"}, # Renamed from 28 to 29
        {"id": 23, "area": "8050 Sq.ft", "dimensions": "7150 + 900", "facing": "North"},
        {"id": 100, "area": "8050 Sq.ft", "dimensions": "7150 + 900", "facing": "North"}, # Renamed from 24 to 100

        # ROW 3 (Bottom - South Facing)
        {"id": 11, "area": "7800 Sq.ft", "dimensions": "6000 + 1800", "facing": "South"},
        {"id": 112, "area": "7800 Sq.ft", "dimensions": "6000 + 1800", "facing": "South"}, # Renamed from 12 to 112
        {"id": 114, "area": "7800 Sq.ft", "dimensions": "6000 + 1800", "facing": "South"}, # Renamed from 14 to 114
        {"id": 116, "area": "7800 Sq.ft", "dimensions": "6000 + 1800", "facing": "South"}, # Renamed from 16 to 116
        {"id": 119, "area": "7800 Sq.ft", "dimensions": "6000 + 1800", "facing": "South"}, # Renamed from 19 to 119
        {"id": 20, "area": "7800 Sq.ft", "dimensions": "6000 + 1800", "facing": "South"},
        {"id": 21, "area": "7800 Sq.ft", "dimensions": "6000 + 1800", "facing": "South"},
        {"id": 22, "area": "7800 Sq.ft", "dimensions": "6000 + 1800", "facing": "South"},
        {"id": 30, "area": "7800 Sq.ft", "dimensions": "6000 + 1800", "facing": "South"},
        {"id": 31, "area": "9640 Sq.ft", "dimensions": "7150 + 2490", "facing": "South"},
    ]
    
    for index, plot in enumerate(plot_data):
        # Organize into 3 visual rows
        if index < 11: # Row 1
            row_idx = 0
            col_idx = index
        elif index < 22: # Row 2
            row_idx = 1
            col_idx = index - 11
        else: # Row 3
            row_idx = 2
            col_idx = index - 22

        # Offset rows to look like the map
        # Image shows rows going DOWN (South) and plots going RIGHT (East)
        lat = base_lat - (row_idx * row_step)
        lng = base_lng + (col_idx * col_step)
        
        # Add slight offset for row 2 and 3 if needed to align with road
        if row_idx == 2:
            lat -= 0.0001
        
        coordinates = [
            [
                [lng, lat],
                [lng + plot_width, lat],
                [lng + plot_width, lat - plot_height],
                [lng, lat - plot_height],
                [lng, lat]
            ]
        ]
        
        status = random.choice(["available", "sold", "booked"])
        
        feature = {
            "type": "Feature",
            "properties": {
                "id": plot["id"],
                "status": status,
                "area": plot["area"],
                "dimensions": plot["dimensions"],
                "facing": plot["facing"],
                "price": f"₹{random.randint(50, 100)} Lakhs"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": coordinates
            }
        }
        plots.append(feature)

    geojson = {
        "type": "FeatureCollection",
        "features": plots
    }
    
    # Determine project root (parent of 'scripts' folder)
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir)
    output_path = os.path.join(project_root, "public", "data", "kabini-plots.json")
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    with open(output_path, "w") as f:
        json.dump(geojson, f, indent=2)
    
    print(f"Generated {output_path} with {len(plots)} placeholder plots.")
    print("In a real scenario, this script would load a Shapefile (.shp) or DXF and convert it.")

if __name__ == "__main__":
    generate_placeholder_data()
