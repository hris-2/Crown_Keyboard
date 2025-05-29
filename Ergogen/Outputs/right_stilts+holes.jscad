function right_stilts_extrude_1_outline_fn(){
    return CAG.circle({"center":[276,-30.8],"radius":3.7})
.union(
    CAG.circle({"center":[183.5,-107.2845],"radius":4})
).union(
    CAG.circle({"center":[226.366459,-144.4216049],"radius":4})
).union(
    CAG.circle({"center":[262,-125.427],"radius":4})
).union(
    CAG.circle({"center":[183.5,-65.1845],"radius":4})
).union(
    CAG.circle({"center":[205,-19.0845],"radius":4})
).extrude({ offset: [0, 0, 1] });
}


function right_mounting_holes_extrude_1_outline_fn(){
    return CAG.circle({"center":[183.5,-107.2845],"radius":2.2})
.union(
    CAG.circle({"center":[226.366459,-144.4216049],"radius":2.2})
).union(
    CAG.circle({"center":[262,-125.427],"radius":2.2})
).union(
    CAG.circle({"center":[183.5,-65.1845],"radius":2.2})
).union(
    CAG.circle({"center":[205,-19.0845],"radius":2.2})
).union(
    CAG.circle({"center":[276,-30.8],"radius":2.2})
).extrude({ offset: [0, 0, 1] });
}




                function right_stilts+holes_case_fn() {
                    

                // creating part 0 of case right_stilts+holes
                let right_stilts+holes__part_0 = right_stilts_extrude_1_outline_fn();

                // make sure that rotations are relative
                let right_stilts+holes__part_0_bounds = right_stilts+holes__part_0.getBounds();
                let right_stilts+holes__part_0_x = right_stilts+holes__part_0_bounds[0].x + (right_stilts+holes__part_0_bounds[1].x - right_stilts+holes__part_0_bounds[0].x) / 2
                let right_stilts+holes__part_0_y = right_stilts+holes__part_0_bounds[0].y + (right_stilts+holes__part_0_bounds[1].y - right_stilts+holes__part_0_bounds[0].y) / 2
                right_stilts+holes__part_0 = translate([-right_stilts+holes__part_0_x, -right_stilts+holes__part_0_y, 0], right_stilts+holes__part_0);
                right_stilts+holes__part_0 = rotate([0,0,0], right_stilts+holes__part_0);
                right_stilts+holes__part_0 = translate([right_stilts+holes__part_0_x, right_stilts+holes__part_0_y, 0], right_stilts+holes__part_0);

                right_stilts+holes__part_0 = translate([0,0,0], right_stilts+holes__part_0);
                let result = right_stilts+holes__part_0;
                
            

                // creating part 1 of case right_stilts+holes
                let right_stilts+holes__part_1 = right_mounting_holes_extrude_1_outline_fn();

                // make sure that rotations are relative
                let right_stilts+holes__part_1_bounds = right_stilts+holes__part_1.getBounds();
                let right_stilts+holes__part_1_x = right_stilts+holes__part_1_bounds[0].x + (right_stilts+holes__part_1_bounds[1].x - right_stilts+holes__part_1_bounds[0].x) / 2
                let right_stilts+holes__part_1_y = right_stilts+holes__part_1_bounds[0].y + (right_stilts+holes__part_1_bounds[1].y - right_stilts+holes__part_1_bounds[0].y) / 2
                right_stilts+holes__part_1 = translate([-right_stilts+holes__part_1_x, -right_stilts+holes__part_1_y, 0], right_stilts+holes__part_1);
                right_stilts+holes__part_1 = rotate([0,0,0], right_stilts+holes__part_1);
                right_stilts+holes__part_1 = translate([right_stilts+holes__part_1_x, right_stilts+holes__part_1_y, 0], right_stilts+holes__part_1);

                right_stilts+holes__part_1 = translate([0,0,0], right_stilts+holes__part_1);
                result = result.subtract(right_stilts+holes__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return right_stilts+holes_case_fn();
            }

        