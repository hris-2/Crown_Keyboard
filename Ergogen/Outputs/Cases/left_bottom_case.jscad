function left_xlboard_extrude_1_outline_fn(){
    return new CSG.Path2D([[15.9,-139],[74.1,-139]]).appendArc([82,-146.9],{"radius":7.9,"clockwise":true,"large":false}).appendPoint([82,-147.1]).appendArc([89.9,-155],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([109.0129741,-155]).appendArc([114.2397847,-156.9762806],{"radius":7.9,"clockwise":true,"large":false}).appendPoint([126.7602153,-168.0237194]).appendArc([131.9870259,-170],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([154.1,-170]).appendArc([162,-162.1],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([162,-15.9]).appendArc([154.1,-8],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([52.9,-8]).appendArc([45,-15.9],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([45,-17.1]).appendArc([37.1,-25],{"radius":7.9,"clockwise":true,"large":false}).appendPoint([15.9,-25]).appendArc([8,-32.9],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([8,-131.1]).appendArc([15.9,-139],{"radius":7.9,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function left_board_extrude_1_outline_fn(){
    return new CSG.Path2D([[20.9,-134],[79.1,-134]]).appendArc([87,-141.9],{"radius":7.9,"clockwise":true,"large":false}).appendPoint([87,-142.1]).appendArc([94.9,-150],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([114.0129741,-150]).appendArc([119.2397847,-151.9762806],{"radius":7.9,"clockwise":true,"large":false}).appendPoint([131.7602153,-163.0237194]).appendArc([136.9870259,-165],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([149.1,-165]).appendArc([157,-157.1],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([157,-20.9]).appendArc([149.1,-13],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([57.9,-13]).appendArc([50,-20.9],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([50,-22.1]).appendArc([42.1,-30],{"radius":7.9,"clockwise":true,"large":false}).appendPoint([20.9,-30]).appendArc([13,-37.9],{"radius":7.9,"clockwise":false,"large":false}).appendPoint([13,-126.1]).appendArc([20.9,-134],{"radius":7.9,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function left_bottom_case_fn() {
                    

                // creating part 0 of case left_bottom
                let left_bottom__part_0 = left_xlboard_extrude_1_outline_fn();

                // make sure that rotations are relative
                let left_bottom__part_0_bounds = left_bottom__part_0.getBounds();
                let left_bottom__part_0_x = left_bottom__part_0_bounds[0].x + (left_bottom__part_0_bounds[1].x - left_bottom__part_0_bounds[0].x) / 2
                let left_bottom__part_0_y = left_bottom__part_0_bounds[0].y + (left_bottom__part_0_bounds[1].y - left_bottom__part_0_bounds[0].y) / 2
                left_bottom__part_0 = translate([-left_bottom__part_0_x, -left_bottom__part_0_y, 0], left_bottom__part_0);
                left_bottom__part_0 = rotate([0,0,0], left_bottom__part_0);
                left_bottom__part_0 = translate([left_bottom__part_0_x, left_bottom__part_0_y, 0], left_bottom__part_0);

                left_bottom__part_0 = translate([0,0,0], left_bottom__part_0);
                let result = left_bottom__part_0;
                
            
                    return result;
                }
            
            

                function left_walls_case_fn() {
                    

                // creating part 0 of case left_walls
                let left_walls__part_0 = left_xlboard_extrude_1_outline_fn();

                // make sure that rotations are relative
                let left_walls__part_0_bounds = left_walls__part_0.getBounds();
                let left_walls__part_0_x = left_walls__part_0_bounds[0].x + (left_walls__part_0_bounds[1].x - left_walls__part_0_bounds[0].x) / 2
                let left_walls__part_0_y = left_walls__part_0_bounds[0].y + (left_walls__part_0_bounds[1].y - left_walls__part_0_bounds[0].y) / 2
                left_walls__part_0 = translate([-left_walls__part_0_x, -left_walls__part_0_y, 0], left_walls__part_0);
                left_walls__part_0 = rotate([0,0,0], left_walls__part_0);
                left_walls__part_0 = translate([left_walls__part_0_x, left_walls__part_0_y, 0], left_walls__part_0);

                left_walls__part_0 = translate([0,0,0], left_walls__part_0);
                let result = left_walls__part_0;
                
            

                // creating part 1 of case left_walls
                let left_walls__part_1 = left_board_extrude_1_outline_fn();

                // make sure that rotations are relative
                let left_walls__part_1_bounds = left_walls__part_1.getBounds();
                let left_walls__part_1_x = left_walls__part_1_bounds[0].x + (left_walls__part_1_bounds[1].x - left_walls__part_1_bounds[0].x) / 2
                let left_walls__part_1_y = left_walls__part_1_bounds[0].y + (left_walls__part_1_bounds[1].y - left_walls__part_1_bounds[0].y) / 2
                left_walls__part_1 = translate([-left_walls__part_1_x, -left_walls__part_1_y, 0], left_walls__part_1);
                left_walls__part_1 = rotate([0,0,0], left_walls__part_1);
                left_walls__part_1 = translate([left_walls__part_1_x, left_walls__part_1_y, 0], left_walls__part_1);

                left_walls__part_1 = translate([0,0,0], left_walls__part_1);
                result = result.subtract(left_walls__part_1);
                
            
                    return result;
                }
            
            

                function left_bottom_case_case_fn() {
                    

                // creating part 0 of case left_bottom_case
                let left_bottom_case__part_0 = left_bottom_case_fn();

                // make sure that rotations are relative
                let left_bottom_case__part_0_bounds = left_bottom_case__part_0.getBounds();
                let left_bottom_case__part_0_x = left_bottom_case__part_0_bounds[0].x + (left_bottom_case__part_0_bounds[1].x - left_bottom_case__part_0_bounds[0].x) / 2
                let left_bottom_case__part_0_y = left_bottom_case__part_0_bounds[0].y + (left_bottom_case__part_0_bounds[1].y - left_bottom_case__part_0_bounds[0].y) / 2
                left_bottom_case__part_0 = translate([-left_bottom_case__part_0_x, -left_bottom_case__part_0_y, 0], left_bottom_case__part_0);
                left_bottom_case__part_0 = rotate([0,0,0], left_bottom_case__part_0);
                left_bottom_case__part_0 = translate([left_bottom_case__part_0_x, left_bottom_case__part_0_y, 0], left_bottom_case__part_0);

                left_bottom_case__part_0 = translate([0,0,0], left_bottom_case__part_0);
                let result = left_bottom_case__part_0;
                
            

                // creating part 1 of case left_bottom_case
                let left_bottom_case__part_1 = left_walls_case_fn();

                // make sure that rotations are relative
                let left_bottom_case__part_1_bounds = left_bottom_case__part_1.getBounds();
                let left_bottom_case__part_1_x = left_bottom_case__part_1_bounds[0].x + (left_bottom_case__part_1_bounds[1].x - left_bottom_case__part_1_bounds[0].x) / 2
                let left_bottom_case__part_1_y = left_bottom_case__part_1_bounds[0].y + (left_bottom_case__part_1_bounds[1].y - left_bottom_case__part_1_bounds[0].y) / 2
                left_bottom_case__part_1 = translate([-left_bottom_case__part_1_x, -left_bottom_case__part_1_y, 0], left_bottom_case__part_1);
                left_bottom_case__part_1 = rotate([0,0,0], left_bottom_case__part_1);
                left_bottom_case__part_1 = translate([left_bottom_case__part_1_x, left_bottom_case__part_1_y, 0], left_bottom_case__part_1);

                left_bottom_case__part_1 = translate([0,0,0], left_bottom_case__part_1);
                result = result.union(left_bottom_case__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return left_bottom_case_case_fn();
            }

        
